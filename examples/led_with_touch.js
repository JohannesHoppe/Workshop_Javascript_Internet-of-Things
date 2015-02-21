/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*global */

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion());

var externalLed = new mraa.Gpio(2); //PIN D2
var touch = new mraa.Gpio(5); // PIN D5
externalLed.dir(mraa.DIR_OUT); // Set Pin D2 to Output device
touch.dir(mraa.DIR_IN); // Set Pin D5 to Input device
var ledState = true; // to hold the state of Led

periodicActivity();

function periodicActivity()
{
    var switchState = touch.read(); // Read Input of D5
    externalLed.write(switchState);
    ledState = !ledState; 
    console.log("blink");
    setTimeout(periodicActivity,20);
}