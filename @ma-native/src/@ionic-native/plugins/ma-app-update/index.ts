import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Ma App Update
 * @description
 * This plugin provides Play Store updates for ManageAmerica Mobile.
 *
 * @usage
 * ```typescript
 * import { MaAppUpdate } from '@ionic-native/ma-app-update';
 *
 *
 * constructor(private maAppUpdate: MaAppUpdate) { }
 *
 * ...
 *
 *
 * this.maAppUpdate.checkAndForceUpdate()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
	pluginName: 'MaAppUpdate',
	plugin: 'cordova-plugin-ma-app-update', // npm package name, example: cordova-plugin-camera
	pluginRef: 'MaAppUpdate', // the variable reference to call the plugin, example: navigator.geolocation
	repo: 'https://github.com/ma-dev-global/ma-cordova-app-update', // the github repository URL for the plugin
	install: '', // OPTIONAL install command, in case the plugin requires variables
	installVariables: [], // OPTIONAL the plugin requires variables
	platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class MaAppUpdate extends IonicNativePlugin {

	/**
	 * This function checks for updates and, if available, forces update
	 * @return {Promise<boolean>} Returns a promise that resolves when the check and/or update is complete
	 */
	@Cordova()
	checkAndForceUpdate(): Promise<boolean> {
		return;
	}

}
