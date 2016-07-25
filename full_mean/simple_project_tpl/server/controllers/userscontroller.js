// controller: fetch data from database
// must load the associated model since db calls are made here

console.log('>> Loading: /server/controllers/userscontroller.js"')

var mongoose = require('mongoose')
// var User = mongoose.model('User')

module.exports = {

  // index - show all records
  index: function (req, res) {
    User.find({}, function (err, users) {
      // res.render('index', {dobes})
    })
  },

  // new record
  new: function (req, res) {
    res.render('new')
  },

  // show record details
  show: function (req, res) {
    console.log('id: ', req.params.id)
    User.find({_id: req.params.id}, function (err, data) {
      if (err) {
        console.log('>> Err with database lookup.')
        res.redirect('/')
      }else {
        console.log('data: ', data)
        res.render('show', {data})
      }
    })
  },

  // create record
  create: function (req, res) {
    console.log('create: ', req.body)
    var u = new User()
    u.name = req.body.name
    u.info = req.body.info
    u.save(function (err, data) {
      if (err) { console.log('>> Error saving new record:', err)} else { console.log('>> Created new record: ', data.name)}
    })
    res.redirect('/')
  },

  // edit record
  edit: function (req, res) {
    Uesr.find({_id: req.params.id}, function (err, data) {
      if (err) {
        console.log('>> Unable to find record for edit.')
        res.redirect('/')
      } else {
        res.render('edit', {data})
      }
    })
  },

  // update record
  update: function (req, res) {
    User.update({_id: req.params.id}, {name: req.body.name, info: req.body.info}, function (err) {
      if (err) { console.log('>> Error with record update.')}
      res.redirect('/')
    })
  },

  // delete record
  delete: function (req, res) {
    User.remove({_id: req.params.id}, function (err) {
      if (err) { console.log('>> Error deleting record.')}
      res.redirect('/')
    })
  }

} // module
