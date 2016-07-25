// Routes configuration
console.log('>> Loading: "server/config/routes.js"')

var mongoose = require('mongoose')

// example model
// var User = mongoose.model('User')

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index'); // index.html
  })
  // app.post('/users', function(req,res) {
  //   var user = new User( {name: req.body.name, password: req.body.password})
  //   user.save(function(err) {
  //     if (err) {
  //       console.log("!Error saving.")
  //     } else {
  //       res.redirect('/main')
  //     }
  //   })
  // })

// app.get('/main', function (req,req) {
//   User.find({}, function (err,users) { // find users and store in 'users'
//     if (error) { console.log('Error finding user.'); }
//     res.render('main', {users: users}); // render main.html or send out as JSON data
//   })
// })
}
