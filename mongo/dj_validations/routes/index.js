var express = require('express')
var router = express.Router()

// mongo and mongoose
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quotes')
var QuoteSchema = new mongoose.Schema({
  quote: {type: String},
  author: {type: String}
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema)
var Quote = mongoose.model('Quote')

// GET home page.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to QuotingDojo' })
})

// GET quotes
router.get('/quotes', function (req, res, next) {
  // sort by createdAt desc...
  Quote.aggregate([ {$sort: {createdAt: -1}}], function (err, quotes) {
    if (err) {
      console.log('>> Error getting quotes!')
    } else {
      res.render('quotes', {title: 'Quotes', quotes})
    }
  })
})

// POST quote
router.post('/quotes', function (req, res, next) {
  var q = new Quote()
  // set document values
  q.quote = req.body.quote
  q.author = req.body.name
  // save document
  q.save(function (err, data) {
    if (err) {
      console.log('>> Error saving new quote!')
      res.redirect('/')
    } else {
      console.log('>> Created new quote!')
      res.redirect('quotes')
    }
  })
})

module.exports = router
