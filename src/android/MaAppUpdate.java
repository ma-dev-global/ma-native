package com.manageamerica.cordova.plugin.maappupdate;

import android.content.Intent;
import android.content.IntentSender;
import android.util.Log;

import com.google.android.play.core.appupdate.AppUpdateInfo;
import com.google.android.play.core.appupdate.AppUpdateManager;
import com.google.android.play.core.appupdate.AppUpdateManagerFactory;
import com.google.android.play.core.install.model.AppUpdateType;
import com.google.android.play.core.install.model.UpdateAvailability;
import com.google.android.play.core.tasks.Task;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.concurrent.atomic.AtomicReference;

import static android.app.Activity.RESULT_CANCELED;
import static android.app.Activity.RESULT_OK;
import static com.google.android.play.core.install.model.ActivityResult.RESULT_IN_APP_UPDATE_FAILED;

public class MaAppUpdate extends CordovaPlugin {

	private static final int REQUEST_CODE = 1999;
	private final AtomicReference<CallbackContext> currentCallbackContext = new AtomicReference<CallbackContext>();

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        cordova.setActivityResultCallback(this);
        Log.i(MaAppUpdate.class.getSimpleName(), "Initialized");
    }

	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.i(MaAppUpdate.class.getSimpleName(), String.format("Action (%s) started", action));
        if ("checkAndForceUpdate".equals(action)) {
            checkAndForceUpdate(callbackContext);
            return true;
        }
        return false;
    }

	private void checkAndForceUpdate (CallbackContext callbackContext) {
		currentCallbackContext.set(callbackContext);
		Log.i(MaAppUpdate.class.getSimpleName(), "Requesting Play Store Update Information");
		AppUpdateManager appUpdateManager = AppUpdateManagerFactory.create(cordova.getContext());
		Task<AppUpdateInfo> appUpdateInfoTask = appUpdateManager.getAppUpdateInfo();
		appUpdateInfoTask.addOnSuccessListener(appUpdateInfo -> {
			Log.i(MaAppUpdate.class.getSimpleName(), String.format("Play Store Package: %s", appUpdateInfo.packageName()));
			Log.i(MaAppUpdate.class.getSimpleName(), String.format("Play Store Vesrion: %s", Integer.toString(appUpdateInfo.availableVersionCode())));
			if (!appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)) {
				Log.i(MaAppUpdate.class.getSimpleName(), "Immediate Update Not Allowed");
				callbackContext.error("U01");
			} else if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE || appUpdateInfo.updateAvailability() == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS ) {
				try{
					if(appUpdateManager.startUpdateFlowForResult(appUpdateInfo,	AppUpdateType.IMMEDIATE, cordova.getActivity(), REQUEST_CODE)){} else {
						callbackContext.error("U02");
					}
				} catch(IntentSender.SendIntentException e){
					callbackContext.error("U03");
					e.printStackTrace();
				}
			} else {
				Log.i(MaAppUpdate.class.getSimpleName(), String.format("No Update Available: %s", Integer.toString(appUpdateInfo.updateAvailability())));
				callbackContext.success("Success");
			}
		});
		appUpdateInfoTask.addOnFailureListener(e -> {
			Log.i(MaAppUpdate.class.getSimpleName(), "Failure Event");
			e.printStackTrace();
			callbackContext.error("U04");
		});
	}

	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        if (requestCode == REQUEST_CODE) {
            final CallbackContext callbackContext = currentCallbackContext.getAndSet(null);
            if (resultCode != RESULT_OK) {
                if (callbackContext != null) {
                    switch(resultCode) {
                        case RESULT_CANCELED:
                            callbackContext.error("canceled");
                            break;
                        case RESULT_IN_APP_UPDATE_FAILED:
                            callbackContext.error("failed");
                            break;
                        default:
                            callbackContext.error("error");
                    }
                }
            }
        }
        super.onActivityResult(requestCode, resultCode, intent);
	}
}