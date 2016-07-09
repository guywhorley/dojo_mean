// ---------- Configuration ----------

// set listen port
var listen_port = 6789;

// set Node env
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// require express  to use it
var express = require('./config/express');
// var express = require('express');
var app = express();

// require path to use it 
 // var path = require("path");

// require body parser to use it
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded( {extended: true}));

// set up the folder for static assets
// app.use(express.static(path.join(__dirname, "./public")));

// set up the views folder for any views we want to render
// app.set('views', path.join(__dirname, './app/views'));
// set up the templating engine
// app.set('view engine', 'ejs');

// ---------- Routes ----------
// app.get('/', function(req,resp) {
//   resp.render("index");
// });

// app.route('/').get(function(req,res) {
//   res.render("index");
// });

// app.post('/surveys', function(req, res) {
//   console.log("POST DATA", req.body);
//   resp.redirect('/show');
// });

// app.get('/show', function(req, res){
//   resp.send("show"); //, {survey: req.body});
// });



// ---------- open connection ----------
app.listen(listen_port);
module.exports = app;
console.log(">> Node.js listening on port ", listen_port);

// app.listen(listen_port, function() {
//   console.log(">> Node.js listening on port ", listen_port);
// });
