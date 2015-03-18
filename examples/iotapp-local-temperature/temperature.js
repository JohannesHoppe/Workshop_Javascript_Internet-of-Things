var mraa = require("mraa");

// ?
var b = 3975;  

//GROVE Kit A0 Connector --> Aio(0)
var myAnalogPin = new mraa.Aio(0);

// read current value of temperature Sensor in celsius
var getCelsius = function() {
    
    var a = myAnalogPin.read();
    console.log("Analog Pin (A0) Output: " + a);

    var resistance = (1023 - a) * 10000 / a; //get the resistance of the sensor;
    var celsius_temperature = 1 / (Math.log(resistance / 10000) / b + 1 / 298.15) - 273.15;//convert to temperature via datasheet ;   
    
    console.log("Celsius Temperature ", celsius_temperature); 
    
    return celsius_temperature;
}

node.exports = {
    getCelsius: getCelsius
};