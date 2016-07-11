// express.js is where you configure the Express application.
// Everything related to Express config goes here.

var config = require('./config'),
express = require('express'),
morgan     = require('morgan'),
compress    = require('compression'),
bodyParser  = require('body-parser'),
methodOverride = require('method-override'),
socket = require('socket.io'),
session = require('express-session');

module.exports = function() {
  var app = express();

  // middleware per specific environment
  if (process.env.NODE_ENV === 'developement') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  // this middleware always runs
  app.use( bodyParser.urlencoded( {extended: true} ));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session( {
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  // use ejs templates location and engine
  app.set('views', './app/views');  // DON'T FORGET THE ./
  app.set('view engine', 'ejs');

  require('../app/routes/index.server.routes.js') (app);

  // === define static AFTER routes ===
  app.use(express.static('./public'));

  return app;
};
