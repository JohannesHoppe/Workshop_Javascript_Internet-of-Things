/**
 * The Grove - Temperature Sensor uses a Thermistor to detect the ambient temperature.
 *
 * The resistance of a thermistor will increase when the ambient temperature decreases.
 * It's this characteristic that we use to calculate the ambient temperature.
 * The detectable range of this sensor is -40 - 125ºC, and the accuracy is ±1.5ºC
 * The higher the temperature goes, the smaller the resistance becomes.
 *
 * See: http://www.seeedstudio.com/wiki/Grove_-_Temperature_Sensor
 */

/*jslint node:true */

var mraa = require("mraa");

// B value of the thermistor
var b = 3975;  

var Temperature = function(pin) {
    
    //GROVE Kit A0 to A3 Connector
    this._myAnalogPin = new mraa.Aio(pin);
};

// read current value of temperature Sensor in celsius
Temperature.prototype.getCelsius = function() {
    
    var a = this._myAnalogPin.read();
    console.log("Analog Pin Output: ", a);

    //Shifting bits to get value between 0 to 1023 (10 bits)		
    if (a > 1024) {		
        a = a >> 2; //Shift 'a' right two bits		
    }
    
    
    var resistance = (1023 - a) * 10000 / a; // get the resistance of the sensor
    var celsius_temperature = 1 / (Math.log(resistance / 10000) / b + 1 / 298.15) - 273.15; // convert to temperature via datasheet   
    
    console.log("Celsius Temperature ", celsius_temperature); 
    
    return celsius_temperature;
};

module.exports = Temperature;