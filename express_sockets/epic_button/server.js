// === Configuration ===
// listen port
var listen_port = 6789

// NODE_ENV
// To set from windows cli: 'set NODE_ENV=development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// must use express
var express = require('./config/express')
var app = express()

// === routes ===
// app.use('/', function(req,res) {
//   res.send('Hello World')
// })

// === open connection ===
var server = app.listen(listen_port)
console.log('>> Node server listening on port ', listen_port)
module.exports = app

if (!app.locals.clickCount) {
  app.locals.clickCount = 0
}

// === sockets.io ===
var io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket) {
  // client connection
  console.log('>> client socket: ', socket.id)
  io.emit('updated_count', app.locals.clickCount)

  // increment button click count
  socket.on('epic_click', function () {
    // console.log(">> incrementing button-click count.")
    app.locals.clickCount += 1
    io.emit('updated_count', app.locals.clickCount)
  })

  // reset button click count
  socket.on('reset_count', function () {
    app.locals.clickCount = 0
    io.emit('updated_count', app.locals.clickCount)
  })
})
