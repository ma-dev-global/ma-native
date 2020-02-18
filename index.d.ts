import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class MaAppUpdateOriginal extends IonicNativePlugin {
    /**
     * This function checks for updates and, if available, forces update
     * @return {Promise<boolean>} Returns a promise that resolves when the check and/or update is complete
     */
    checkAndForceUpdate(): Promise<boolean>;
}

export declare const MaAppUpdate: MaAppUpdateOriginal;