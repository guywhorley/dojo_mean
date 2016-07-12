// === Configuration ===

// Require the Express Module
var express = require('express')

// Create an Express App
var app = express()

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser')

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }))

// Require path to setup paths to views and static folders
var path = require('path')

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')))

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'))

// Setting our View Engine set to EJS
app.set('view engine', 'ejs')

// === Mongoose ===
var mongoose = require('mongoose')

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/intro')

// define schema for user
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
// associate 'User' with Schema, create the db collection
mongoose.model('User', UserSchema)
var User = mongoose.model('User')

// === Routes ===

// Root Request
app.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log('>> Error getting data from Users collection!')
    } else {
      console.log('Users: ', users)
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      res.render('index', { users: users}) // pass users to index page
    }
  })
})

// Add User Request
app.post('/users', function (req, res) {
  // console.log('>> POST DATA: ', req.body)
  // This is where we would add the user from req.body to the database.
  var user = new User({name: req.body.name, age: req.body.age})
  user.save(function (err) {
    if (err) {
      console.log('>> error saving new user!')
    } else {
      console.log('>> succesfully added user')
      res.redirect('/')
    }
  })
})

// === Listening ===
app.listen(8000, function () {
  console.log('listening on port 8000')
})
