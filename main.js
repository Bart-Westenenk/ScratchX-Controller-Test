/*boolean gpConnected;
var gamepad;

window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected from index %d: %s",
    e.gamepad.index, e.gamepad.id);
  gpConnected = true;
  gamepad =	e.gamepad;
});

window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Gamepad disconnected from index %d: %s",
    e.gamepad.index, e.gamepad.id);
  gpConnected = false;
  gamepad = null;
});
*/
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
		return 100;
    };
	
	ext.check_connection = function() {
		//Code to check if there is an active connnection with a gamepad.
		return gpConnected;		
	}
	
	

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'Left stick X', 'my_first_block'],
			['r', 'Gamepad connected?', 'check_connection'],
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});