// ---------- Express Configuration ----------
var config = require('./config'),
  express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  ejs = require('ejs'),
  path = require('path'),
  socket = require('socket.io'),
  querystring = require('querystring')

module.exports = function () {
  var app = express()
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress())
  }

  app.set('views', path.join(__dirname, '../app/views'))
  app.use(express.static(path.join(__dirname, '../public')))
  app.set('view engine', 'ejs')
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(methodOverride())

  require('../app/routes/index.server.routes.js')(app)
  return app
}
