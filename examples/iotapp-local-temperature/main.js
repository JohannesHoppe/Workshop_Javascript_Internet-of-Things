/*jslint node:true,vars:true,bitwise:true,unparam:true */
/*jshint unused:true */

/** 
 *  Reads Temperature Sensor periodically, starts a web server and communicate wirelessly using WebSockets.
 */

var Temperature = require('./Temperature'),
    Lcd = require('./Lcd'),
    http = require('http'),
    io = require('socket.io')(app);

// config
var temperatureAnologPin = 0;
var temperature = new Temperature(temperatureAnologPin);
var lcd = new Lcd();

console.log("Sample Reading Grove Kit Temperature Sensor");

// normal HTTP server
var app = http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h1>Hello world from Intel IoT platform!</h1>');
    
}).listen(1337);


// socket.io server
io.on('connection', function (socket) {

    console.log('user connected');
    socket.emit('connected', 'Welcome');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

// checks temperature in celsius every second
setInterval(function () {

    var temp = temperature.getCelsius();

    io.sockets.emit("message", temp);
    
    lcd.clear();
    lcd.write("Temp: " + temp.toFixed(2) + "C");
    
}, 1000);
