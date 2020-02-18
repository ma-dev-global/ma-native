var exec = cordova.require('cordova/exec');

function MaAppUpdate() {
    console.log('MA App Update instantiated.');
};

MaAppUpdate.prototype.checkAndForceUpdate = function(onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'MaAppUpdate', 'checkAndForceUpdate', []);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = new MaAppUpdate();
}