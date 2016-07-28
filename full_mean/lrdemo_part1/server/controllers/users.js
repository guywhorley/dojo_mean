var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {

  /* 
    Note to self: Any time I am checking on the if (err), I must use the 
    if () {} else {} construct --- if I don't, I will get a 'can't set headers' 
    message since I am attempting to send json res 2x.
  */


  // destroy session object
  logout: function (req, res) {
    req.session.destroy(function (err) {
      if (err) res.json({status: false, errors: err})
      res.json({status: true})
    })
  },

  // login existing user
  login: function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
      if (err) { res.json({status: false, errors: err}) } 
      else if (user) {
        if (user.validPassword(req.body.password)) {
          req.session['userInfo'] = {
            id: user._id,
            first_name: user.first_name
          }
          res.json({ status: true, userInfo: req.session['userInfo']})
        } else {
          res.json({status: false, errors: 'Problem. Try again!'})
        }
      }
    })
  },

  // encrypt pw and add user
  register: function (req, res) {
    var user = new User(req.body)
    user.save(function (err) {
      if (err) { 
        console.log(err)
        res.json({status: false, errors: err}) 
      } else {
        req.session['userInfo'] = {
          id: user._id,
          first_name: user.first_name
        }
       res.json({ status: true, userInfo: req.session['userInfo']})
      }  
  })
  }
}
