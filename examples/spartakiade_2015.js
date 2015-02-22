/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*global */

var mraa = require('mraa');
var LCD  = require ('jsupm_i2clcd');
console.log('MRAA Version: ' + mraa.getVersion());

var externalLed = new mraa.Gpio(2); // LED on D2
externalLed.dir(mraa.DIR_OUT);
externalLed.write(1);

var myLCD = new LCD.Jhd1313m1(0, 0x3E, 0x62);  // LCD on IC2
myLCD.write("Spartakiade 2015");
myLCD.setColor(255, 0, 0);

var touch = new mraa.Gpio(5); // Touch on D5
touch.dir(mraa.DIR_IN);

periodicActivity();

function periodicActivity()
{
    var switchState = touch.read();
    setTimeout(periodicActivity, 1000);
}