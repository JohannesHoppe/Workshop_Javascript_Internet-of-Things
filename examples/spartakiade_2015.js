var mraa = require('mraa');
var LCD  = require ('jsupm_i2clcd');

var myLCD = new LCD.Jhd1313m1(0, 0x3E, 0x62);  // LCD on I2C
myLCD.write("Spartakiade 2015");
myLCD.setColor(255, 0, 0);

periodicActivity();

function periodicActivity()
{
    setTimeout(periodicActivity, 1000);
}
