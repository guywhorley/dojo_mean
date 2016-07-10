// ------ configuration ------
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname,"./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ------ routes ------
app.get('/', function(req,res) {
  res.render("index");
});

// ------ open connections ------
var server = app.listen(8000, function() {
    console.log(">> Listening on port 8000");
});

var io = require('socket.io').listen(server);

// all the server-side socket code goes in here!
// when a client connects to server, this code runs...
io.sockets.on('connection', function(socket) {
  console.log(">>Socket Connection established.");
  console.log(">>Client: ", socket.id);

  socket.on("button_clicked", function(data) {
    console.log('Someone clicked a button! Socket: ' + socket.id + ' Reason: ', data.reason);
    socket.emit('server_response', {response: 'the cool server says hi!'});
  });

});
