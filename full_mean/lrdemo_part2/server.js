// basic server.js

console.log('>> Launching server.js...')
var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var path = require('path')

var app = express()
app.use(bodyParser.json()) // only passing json
app.use(express.static(path.join(__dirname, '/client')))

// session
app.use(session({
  secret: 'grumpy cat',
  resave: false,
  saveUninitialized: true
}))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

process.env.PORT = process.env.PORT || 8000
app.listen(process.env.PORT, function () {
  console.log('>> Express server listening on TCP Port:', process.env.PORT)
})
