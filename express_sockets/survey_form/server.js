// ---------- Configuration ----------

// set listen port
var listen_port = 6789;

// set Node env
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// require express  to use it
var express = require('./config/express');
// var express = require('express');
var app = express();

// ---------- open connection ----------
app.listen(listen_port);
module.exports = app;
console.log(">> Node.js listening on port ", listen_port);
