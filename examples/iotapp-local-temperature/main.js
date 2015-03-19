/*jslint node:true,vars:true,bitwise:true,unparam:true */
/*jshint unused:true */

/** 
 *  Reads Temperature Sensor periodically, starts a web server and communicate wirelessly using WebSockets.
 */

console.log("Improved Sample Reading Grove Kit Temperature Sensor");

var http = require('http'),
    socket_io = require('socket.io'),
    ip = require("ip"),
    Temperature = require('./Temperature'),
    HttpHandler = require('./HttpHandler'),
    Lcd = require('./Lcd');

// config
var temperatureAnologPin = 0;
var temperature = new Temperature(temperatureAnologPin);
var lcd = new Lcd();

// create HTTP server and websocket server
var httpHandler = new HttpHandler(__dirname + '/index.html'),
    app = http.createServer(httpHandler.getHandler()),
    io = socket_io(app),
    ipAddress = ip.address();

app.listen(1337);

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
    lcd.write("Temp: " + temp.toFixed(2) + "^C");
    lcd.setCursor(1,0);
    lcd.write(ipAddress);
    
}, 1000);
