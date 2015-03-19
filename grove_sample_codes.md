# Grove module sample code for UPM

UPM is a high level repository for sensors that use libmraa. Each sensor links to libmraa and are not meant to be interlinked although some groups of sensors may be. Each sensor contains a header which allows to interface with it. Typically a sensor is represented as a class and instantiated.

see http://iotdk.intel.com/docs/master/upm/index.html

This list was extracted from
https://github.com/intel-iot-devkit/upm/tree/master/examples/javascript

## Grove Touch

```js
var mraa_touch = require("mraa");
var touch = new mraa_touch.Gpio(8);
touch.dir(mraa_touch.DIR_IN);

function readTouch() {
        console.log("Gpio is " + touch.read());
}
setInterval(readTouch, 1000);
```

## Grove Temperature

```js
//Load grove module.
var groveSensor = require('jsupm_grove');
//Initialize temperature sensor class on Aio #1
var temp = new groveSensor.GroveTemp(1);
console.log(temp.value());
```

```js
// Load Grove module
var groveSensor = require('jsupm_grove');

// Create the temperature sensor object using AIO pin 0
var temp = new groveSensor.GroveTemp(0);
console.log(temp.name());

// Read the temperature ten times, printing both the Celsius and
// equivalent Fahrenheit temperature, waiting one second between readings
var i = 0;
var waiting = setInterval(function() {
    var celsius = temp.value();
    var fahrenheit = celsius * 9.0/5.0 + 32.0;
    console.log(celsius + " degrees Celsius, or " + Math.round(fahrenheit) + " degrees Fahrenheit");
    i++;
    if (i == 10) clearInterval(waiting);
}, 1000);
```

## Grove Rotary

```js
var upm_grove = require('jsupm_grove');

//setup access analog input Analog pin #0 (A0)
var groveRotary = new upm_grove.GroveRotary(0);

loop();

function loop()
{
    var abs = groveRotary.abs_value();
    var absdeg = groveRotary.abs_deg();
    var absrad = groveRotary.abs_rad();

    var rel = groveRotary.rel_value();
    var reldeg = groveRotary.rel_deg();
    var relrad = groveRotary.rel_rad();

    //write the knob value to the console in different formats
    console.log("Abs: " + abs + " " + Math.round(parseInt(absdeg)) + " " + absrad.toFixed(3));
    console.log("Rel: " + rel + " " + Math.round(parseInt(reldeg)) + " " + relrad.toFixed(3));

    //wait 2 s and call function again
    setTimeout(loop, 2000);
}
```

## Grove Button

```js
// Load Grove module
var groveSensor = require('jsupm_grove');

// Create the button object using GPIO pin 0
var button = new groveSensor.GroveButton(0);

// Read the input and print, waiting one second between readings
function readButtonValue() {
    console.log(button.name() + " value is " + button.value());
}
setInterval(readButtonValue, 1000);
```

## Grove Slide

```js
var upm_grove = require('jsupm_grove');

//setup access analog input Analog pin #0 (A0)
var groveSlide = new upm_grove.GroveSlide(0);

loop();

function loop()
{
    var raw = groveSlide.raw_value();
    var volts = groveSlide.voltage_value();

    //write the slider values to the console
    console.log("Slider Value: " + raw + " = " + volts.toFixed(2) + " V");

    //wait 2 s then call function again
    setTimeout(loop, 2000);
}
```

## Grove mini servo

```js
//Load servo module.
var servoModule = require("jsupm_servo");

//Instantiate Servo module on digital port 5
var servo = new servoModule.Servo(5);
servo.setMinPulseWidth(600);
servo.setMaxPulseWidth(2200) 

function moveServo()
{
    //set angle of the servo to 180 degree after one seconds
    setInterval(function () {
        servo.setAngle(180);
    }, 1000);
    
    //set angle of the servo to 90 degree after two seconds
    setInterval(function () {
        servo.setAngle(90);
    }, 2000);
    
    //set angle of the servo to 0 degree after three seconds
    setInterval(function () {
        servo.setAngle(0);
    }, 3000);
}

moveServo();
```

## Grove LED

```js
var upmled = require("jsupm_grove");
var myled = new upmled.GroveLed(2);
var flag = true;
function blink() {
    if (flag) {
        myled.on();
    }
    else {
        myled.off();
    }
    flag = !flag; //toggle between states.
    setTimeout(blink, 1000);
}
blink();
```

```
Grove LCD Backlight

//Load i2clcd module
var LCD = require('jsupm_i2clcd');
//Initialize Jhd1313m1 at 0x62 (RGB_ADDRESS) and 0x3E (LCD_ADDRESS)
var myLcd = new LCD.Jhd1313m1 (0, 0x3E, 0x62);
myLcd.setCursor(0,0);
myLcd.write('Hello World');
```

## Grove buzzer

```js
var upmBuzzer = require("jsupm_buzzer");
var myBuzzer = new upmBuzzer.Buzzer(5);
var chord = [upmBuzzer.DO, upmBuzzer.RE, upmBuzzer.MI, upmBuzzer.FA, upmBuzzer.SOL, upmBuzzer.LA, upmBuzzer.SI, upmBuzzer.DO, upmBuzzer.SI];
var chordIndex = 0;
function melody() {
    if (chord.length != 0) {
        //Play sound
        myBuzzer.playSound(chord[chordIndex], 100000);
        chordIndex++;
        //Reset the sound to start from the beginning.
        if (chordIndex > chord.length - 1) chordIndex = 0;
        setTimeout(melody, 100);
    }
}
melody();
```

## Grove Light

```js
var pinNumber = 1;  // replace your pin number
var groveSensor = require('jsupm_grove');
var light = new groveSensor.GroveLight(pinNUmber);
console.log(light.value());
```

```js
// Load Grove module
var groveSensor = require('jsupm_grove');

// Create the light sensor object using AIO pin 0
var light = new groveSensor.GroveLight(0);

// Read the input and print both the raw value and a rough lux value,
// waiting one second between readings
function readLightSensorValue() {
    console.log(light.name() + " raw value is " + light.raw_value() +
            ", which is roughly " + light.value() + " lux");
}
setInterval(readLightSensorValue, 1000);
```

## Grove Button

```js
mraa_button = require("mraa");
myButton = new mraa_button.Gpio(8);
myButton.dir(mraa_button.DIR_IN);

function readButton() {
        console.log("Gpio is " + myButton.read());
}
setInterval(readButton, 1000);
```

## Grove Relay

```js
// Load mraa.js module.
var mraa = require("mraa");
//Initialize gpio 8 and 6
var myButton = new mraa.Gpio(8);
var myrelay = new mraa.Gpio(6);
//set input direction for button and output for relay
myButton.dir(mraa.DIR_IN);
myrelay.dir(mraa.DIR_OUT);

function readButton() {
//if button is pressed, send HIGH signal to relay.
    if (myButton.read() == 1) {
        myrelay.write(1);
    }
    else {
        myrelay.write(0);
    }
}
setInterval(readButton, 10);
```