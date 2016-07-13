// === configuration ===
var express = require('express')
var app = express()

// body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// override
var methodOverride = require('method-override')

// path
var path = require('path')
app.use(express.static(path.join(__dirname, './public')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// === mongoose ===
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/doghouse')
var DogSchema = new mongoose.Schema({
  name: {type: String},
  info: {type: String}
}, {timestamps: true})
mongoose.model('Dog', DogSchema)
var Dog = mongoose.model('Dog')

// === routes ===

// index - show all dobes
app.get('/', function (req, res) {
  Dog.find({}, function (err, dobes) {
    res.render('index', {dobes})
  })
})

// new dobe
app.get('/dobes/new', function (req, res) {
  res.render('new')
})

// show dobe details
app.get('/dobes/:id', function (req, res) {
  console.log('id: ', req.params.id)
  Dog.find({_id: req.params.id}, function (err, data) {
    if (err) {
      console.log('>> Err with lookup on dog.')
      res.redirect('/')
    }else {
      console.log('Dog: ', data)
      res.render('show', {data})
    }
  })
})

// create dobe
app.post('/dobes', function (req, res) {
  console.log('create: ', req.body)
  var d = new Dog()
  d.name = req.body.name
  d.info = req.body.info
  d.save(function (err, data) {
    if (err) { console.log('>> Error saving new dog:', err)}else { console.log('>> Created new dog: ', data.name)}
  })
  res.redirect('/')
})

// edit dobe
app.get('/dobes/:id/edit', function (req, res) {
  Dog.find({_id: req.params.id}, function (err, data) {
    if (err) {
      console.log('>> Unable to find dog for edit.')
      res.redirect('/')
    } else {
      res.render('edit', {data})
    }
  })
})

// update dobe
app.post('/dobes/:id', function (req, res) {
  Dog.update({_id: req.params.id}, {name: req.body.name, info: req.body.info}, function (err) {
    if (err) { console.log('>> Error with dog update.')}
    res.redirect('/')
  })
})

// delete dobe
app.post('/dobes/:id/destroy', function (req, res) {
  Dog.remove({_id: req.params.id}, function (err) {
    if (err) { console.log('>> Error deleting record.')}
    res.redirect('/')
  })
})

// === listening ===
app.listen(8000, function () {
  console.log('>> Listening at port 8000')
})
