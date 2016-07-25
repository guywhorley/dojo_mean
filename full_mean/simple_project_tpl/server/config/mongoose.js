// Configure mongoose, connect to mongoDB, read model files
console.log('>> Loading: "server/config/mongoose.js"')

// regular expression for file check
reg = new RegExp('.js$', 'i'),

// database information - CHANGE TO YOUR DB NAME
dbURI = 'mongodb://localhost/<YOUR_DB_NAME>'

// require mongoose
var mongoose = require('mongoose')

// require the fs module for loading model files
var fs = require('fs')

// require path for getting the models path
var path = require('path')

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models')

// connect to mongoose
mongoose.connect(dbURI)

// === CONNECTION EVENTS ===
mongoose.connection.on('connected', function () {
  console.log(`>> Mongoose default connection open to ${ dbURI }`)
})

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.error(`>> Mongoose default connection error: ${ err }`)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('>> Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('>> Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})

// === read model files ===
fs.readdirSync(models_path).forEach(function (file) {
  if (reg.test(file)) {
    require(path.join(models_path, file))
  }
})
