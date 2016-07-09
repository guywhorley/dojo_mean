// ------------- Config -------------

// require express to use it
var express = require('express');
// require socket.io to use it
var io = require('socket.io');
//require path to use it
var path = require('path');
// use express to set up our app, which is our server
var app = express();
// set up the views folder to get any views we want to render
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// -------------- Routes ----------------
app.get('/', function(req,resp) {
  resp.render("index");
});

 // ------------- Open connection ---------------
 app.listen(8000, function() {
  console.log(">> Node.js listening on port 8000");
});

// -------------- Sockets ----------------

// require to use it
var io = require('socket.io').listen(server);
