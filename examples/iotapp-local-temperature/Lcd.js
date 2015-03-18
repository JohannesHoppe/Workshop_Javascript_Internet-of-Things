/**
 * Displays text on LCD connected to I2C data bus
 *
 * The Jhd1313m1 has two i2c addreses, one belongs to a controller very similar to the upm::Lcm1602 LCD driver
 * which controls the HD44780 based display and the other controls solely the backlight.
 * This module was tested with the Seed Grove LCD RGB Backlight v2.0 display, which requires 5V to operate.
 *
 * see: http://iotdk.intel.com/docs/master/upm/classupm_1_1_jhd1313m1.html
 * see: http://www.seeedstudio.com/wiki/Grove_-_LCD_RGB_Backlight
 */

/*jslint node:true */

var mraa = require("mraa"),
    LCD  = require ('jsupm_i2clcd');

var Lcd = function() {
    
    this._myLCD = new LCD.Jhd1313m1(0, 0x3E, 0x62);  // connect the LCD to any I2C socket
    this._myLCD.setColor(255, 0, 0); // hardcoded red
    this._myLCD.write("Spartakiade!");
};

// write text to lcd
Lcd.prototype.write = function(text) {
    
    this._myLCD.clear();
    this._myLCD.write(text);
};

module.exports = Lcd;