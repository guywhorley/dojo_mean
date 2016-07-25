// === configuration ===
var listen_port = 8000 // set this to your choice
var express = require('express') // npm install express --save
var app = express()

// body parser - parse out JSON, text from request body
var bodyParser = require('body-parser') // npm install body-parser --save
app.use(bodyParser.urlencoded({extended: true}))

// add http put and delete verbs
var methodOverride = require('method-override') // npm install method-override --save

// path to public and views
var path = require('path') // npm install path --save
app.use(express.static(path.join(__dirname, './client'))) // index html
app.use(express.static(path.join(__dirname, './client/assets'))) // css, images, .etc...
app.set('views', path.join(__dirname, './client/partials')) // angular partials
// app.set('view engine', 'ejs') // npm install ejs --save

// === mongoose ===
// require config file which does the rest
// connect mongoose and read in all /model/*.js files
require('./server/config/mongoose.js') // npm install mongoose --save

// === routes ===
// since routes.js exports a function
// require("./server/config/routes.js") IS A FUNCTION!
// now we invoke it, passing it app!
require('./server/config/routes.js')(app)

// === listening ===
app.listen(listen_port, function () {
  console.log('>> Server Listening on port' , listen_port)
})
