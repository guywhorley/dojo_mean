// server.js
console.log('>> Launcing server.js...')

var express = require('express')
var bodyparser = require('body-parser')
var session = require('express-session')
var path = require('path')

var app = express()
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, '/client')))

// configure session - session object is stored in request object
app.use(session({ 
    secret: 'grumpy cat',
   resave: false, 
   saveUninitialized: true
}))

// mongoose, app
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

// built-in node object called process gives access the user environment
process.env.PORT = process.env.PORT || 8000
app.listen(process.env.PORT, function () {
  console.log(">> listening on TCP port: 8000")
})