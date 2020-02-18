var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MaAppUpdateOriginal = /** @class */ (function (_super) {
    __extends(MaAppUpdateOriginal, _super);
    function MaAppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaAppUpdateOriginal.prototype.checkAndForceUpdate = function () { return cordova(this, "checkAndForceUpdate", {}, arguments); };
    MaAppUpdateOriginal.pluginName = "MaAppUpdate";
    MaAppUpdateOriginal.plugin = "cordova-plugin-ma-app-update";
    MaAppUpdateOriginal.pluginRef = "cordova.plugins.MaAppUpdate";
    MaAppUpdateOriginal.repo = "https://github.com/ma-dev-global/ma-cordova-app-update";
    MaAppUpdateOriginal.install = "";
    MaAppUpdateOriginal.installVariables = [];
    MaAppUpdateOriginal.platforms = ["Android"];
    return MaAppUpdateOriginal;
}(IonicNativePlugin));
var MaAppUpdate = new MaAppUpdateOriginal();
export { MaAppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21hLWFwcC11cGRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBa0MzRiwrQkFBaUI7Ozs7SUFPakQseUNBQW1COzs7Ozs7OztzQkExQ3BCO0VBbUNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgTWEgQXBwIFVwZGF0ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgUGxheSBTdG9yZSB1cGRhdGVzIGZvciBNYW5hZ2VBbWVyaWNhIE1vYmlsZS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTWFBcHBVcGRhdGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21hLWFwcC11cGRhdGUnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hQXBwVXBkYXRlOiBNYUFwcFVwZGF0ZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLm1hQXBwVXBkYXRlLmNoZWNrQW5kRm9yY2VVcGRhdGUoKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuXHRwbHVnaW5OYW1lOiAnTWFBcHBVcGRhdGUnLFxyXG5cdHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1hLWFwcC11cGRhdGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuXHRwbHVnaW5SZWY6ICdNYUFwcFVwZGF0ZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuXHRyZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hLWRldi1nbG9iYWwvbWEtY29yZG92YS1hcHAtdXBkYXRlJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG5cdGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuXHRpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuXHRwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYUFwcFVwZGF0ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBmdW5jdGlvbiBjaGVja3MgZm9yIHVwZGF0ZXMgYW5kLCBpZiBhdmFpbGFibGUsIGZvcmNlcyB1cGRhdGVcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGNoZWNrIGFuZC9vciB1cGRhdGUgaXMgY29tcGxldGVcclxuXHQgKi9cclxuXHRAQ29yZG92YSgpXHJcblx0Y2hlY2tBbmRGb3JjZVVwZGF0ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==