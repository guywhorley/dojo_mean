// var mongoose = require( 'mongoose' ),
//     express  = require( 'express' ),
//     path     = require( 'path' ),
//     bodyParser = require('body-parser'),
//     root     = __dirname,
//     port     = process.env.PORT || 8000,
//     app      = express();

// app.use( express.static( path.join( root, 'client' )));
// app.use( express.static( path.join( root, 'bower_components' )));

// app.listen( port, function() {
//   console.log( `server running on port ${ port }` );
// });



var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(8000, function() {} ); 
console.log(">> listening on port 8000");
