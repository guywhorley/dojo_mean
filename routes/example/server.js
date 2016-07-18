
var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(8000, function() {} ); 
console.log(">> listening on port 8000");
