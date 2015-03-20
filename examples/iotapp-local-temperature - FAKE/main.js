/*jslint node:true,vars:true,bitwise:true,unparam:true */
/*jshint unused:true */

/** 
 *  Starts a web server and communicate wirelessly using WebSockets - serves random data
 */

var http = require('http'),
    socket_io = require('socket.io')
    HttpHandler = require('./HttpHandler');

// create HTTP server and websocket server
var httpHandler = new HttpHandler(__dirname + '/index.html'),
    app = http.createServer(httpHandler.getHandler()),
    io = socket_io(app);

app.listen(1337);

// socket.io server
io.on('connection', function (socket) {

    console.log('user connected');
    socket.emit('connected', 'Welcome');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

var randomIntFromInterval = function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// checks temperature in celsius every second
setInterval(function () {

    var temp = randomIntFromInterval(20, 25);
    io.sockets.emit("message", temp);
    
    console.log("Fake temperature:", temp);
   
}, 1000);
