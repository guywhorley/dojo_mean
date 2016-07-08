// file: server.js
// auth: Guy Whorley
// desc: express_hello

// Load express module
var express = require("express");
var app = express();
var listen_port = 6789;

// set app paths to static folder
app.use(express.static(__dirname + "/static"));

// set path to ejs views and instruct Node that
// ejs templating is being used
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Base route
app.get('/', function(request, response) {
  response.send("<h1>Hello Express!</h1>");
});

app.get('/users', function(request, response) {
  var users_array = [        // test data
    {name: 'Joe', email: 'joe@foo.com'},
    {name: 'Mike',email: 'mike@foo.com'},
    {name: 'Sue', email: 'sue@foo.com'},
    {name: 'Frank', email: 'frank@bar.com'}
   ];
   response.render('users', {users: users_array});
});

// Instruct app to listen
app.listen(listen_port, function() {
  console.log(">> listening on port ", listen_port);
});
