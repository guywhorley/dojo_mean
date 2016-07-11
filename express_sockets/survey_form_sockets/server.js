// === Configuration ===

// set listen port
var listen_port = 6789;

// === set Node env ===
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// require express  to use it
var express = require('./config/express');
var app = express();

// === open connection ===
var server = app.listen(listen_port);
module.exports = app;
console.log(">> Node.js listening on port ", listen_port);

// === sockets.io ===
var io =require('socket.io').listen(server);

// === socket listeners go here ===
io.sockets.on('connection', function(socket) {

  // client connection
  console.log('>> client connection established:', socket.id);

  // client posts form data
  // 'querystring' module must be required for .parse
  // which deserializes the JSON data back into an object.
  socket.on('posting_form', function(data) {
    var msg = querystring.parse(data);
    console.log(">> node server emitting: ", msg);
    socket.emit('updated_message', msg);
    var r = rand();
    console.log(">> Random number: ", r);
    socket.emit('random_number', r);
  });

  function rand() {
    return Math.floor(Math.random() * 1001);
  }

});
