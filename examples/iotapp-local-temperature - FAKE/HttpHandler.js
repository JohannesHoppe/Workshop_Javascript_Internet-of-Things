/**
 * We do not need express to just serve an index.html
 */

/*jslint node:true */

var fs = require('fs');

var HttpHandler = function(fileToServe) {
    this._file = fileToServe;
};

HttpHandler.prototype.getHandler = function() {
    
    return (function (req, res) {

        fs.readFile(

            this._file,
            function (err, data) {

                if (err) {
                  res.writeHead(500);
                  return res.end('Error loading index.html');
                }

                res.writeHead(200);
                res.end(data);
            }
        );
    }).bind(this);   
};

module.exports = HttpHandler;