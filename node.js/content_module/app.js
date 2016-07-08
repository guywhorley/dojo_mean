// file: app.js
// auth: Guy Whorley
// desc: node.js app code

var http = require('http');
var fs = require('fs');

var listen_port = 6789;

// the file below is the file you need to create for this assignment.
// NOTE!!!  The '.' in the filepath below just refers to the location of the current file, in this case
// the file is app.js.  Thus the path './static.js' just refers to a file called static.js
var static_contents = require('./modules/static.js');

//creating a server
server = http.createServer(function (request, response) {
  static_contents.get(request, response);  //this will serve all static files automatically
});

server.listen(listen_port);
console.log(">> Running in localhost at port ", listen_port);
