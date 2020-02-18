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

		AppUpdateManager appUpdateManager = AppUpdateManagerFactory.create(cordova.getContext());
		Task<AppUpdateInfo> appUpdateInfoTask = appUpdateManager.getAppUpdateInfo();
		appUpdateInfoTask.addOnSuccessListener(appUpdateInfo -> {
			if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE && appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)) {
				try{
					if(appUpdateManager.startUpdateFlowForResult(appUpdateInfo,	AppUpdateType.IMMEDIATE, cordova.getActivity(), REQUEST_CODE)){} else {
						callbackContext.error("U01");
					}
				} catch(IntentSender.SendIntentException e){
					callbackContext.error("U02");
					e.printStackTrace();
				}
			} else {
				callbackContext.success("U00");
			}
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