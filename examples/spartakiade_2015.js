/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*global */

var mraa = require('mraa'); //require mraa
var LCD  = require ('jsupm_i2clcd');
console.log('MRAA Version: ' + mraa.getVersion());

var externalLed = new mraa.Gpio(2); //PIN D2
var myLCD = new LCD.Jhd1313m1(0, 0x3E, 0x62);
externalLed.dir(mraa.DIR_OUT);
myLCD.write("Spartakiade 2015");
myLCD.setColor(255, 0, 0);
externalLed.write(1);
periodicActivity();

function periodicActivity()
{
  setTimeout(periodicActivity, 1000);
}