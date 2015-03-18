/*jslint node:true,vars:true,bitwise:true,unparam:true */
/*jshint unused:true */

/** 
 *  Reads Temperature Sensor periodically, starts a web server and communicate wirelessly using WebSockets.
 */

var temperature = require('./temperature'),
    http = require('http'),
    io = require('socket.io')(app);

// sends temperature in celsius every 4 seconds
function startSensorWatch(socket) {
  
    setInterval(function () {
       socket.emit("message", temperature.getCelsius());
    }, 4000);
}

console.log("Sample Reading Grove Kit Temperature Sensor");

// normal HTTP server
var app = http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h1>Hello world from Intel IoT platform!</h1>');
    
}).listen(1337);


// socket.io server
io.on('connection', function (socket) {

    console.log('a user connected');
    socket.emit('connected', 'Welcome');

    startSensorWatch(socket);

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

