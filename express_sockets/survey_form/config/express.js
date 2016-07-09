// ---------- Express Configuration ----------
var express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');
  ejs = require('ejs');
  path = require('path');

 // set up the folder for static assets
 //app.use(express.static(path.join(__dirname, "./public")));

 // set up the views folder for any views we want to render
 // app.set('views', path.join(__dirname, './app/views'));
 // set up the templating engine
 // app.set('view engine', 'ejs');




module.exports = function() {
  var app = express();
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.set('views', path.join(__dirname, '../app/views'));
  app.use(express.static(path.join(__dirname, "../public")));
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride());

  require('../app/routes/index.server.routes.js') (app);
  return app;
};
