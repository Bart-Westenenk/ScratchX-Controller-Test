
var gamepadAPI = {
  controller: {},
  turbo: false,
  connect: function() { leftStick = 1},
  disconnect: function() { leftStick = 2},
  update: function() { leftStick = 3},
  buttonPressed: function() { leftStick = 4},
  buttons: [],
  buttonsCache: [],
  buttonsStatus: [],
  axesStatus: []
};

var leftStick = 0;

(function(ext) {

    window.addEventListener("gamepadconnected", gamepadAPI.connect);
    window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.getXL3 = function() {
        return leftStick;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['r', 'L3-X', 'getXL3'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});