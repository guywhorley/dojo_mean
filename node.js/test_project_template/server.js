
var listen_port = 6789;
var express = require("express");
var path = require("path");
var app = express();

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// ejs templates
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route
app.get('/', function(req,resp) {
  resp.render("index");
});

// adding new user
app.post('/users', function(req, resp) {
  console.log("POST DATA", req.body);
  resp.redirect('/');
});

// start listeninging on listen_port
app.listen(listen_port, function() {
  console.log("listening on port ", listen_port);
});
