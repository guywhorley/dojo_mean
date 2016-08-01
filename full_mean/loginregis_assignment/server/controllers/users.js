console.log('>> loaded "./server/controllers/users.js"')

// need to require mongoose so that we can get at the User model
var mongoose = require('mongoose')
var User = mongoose.model('User') // get the user model that is already defined

// when this module is called via 'require' in the routes.js, I need to return somemthing.
// the sth I need to return are the actual controller methods.
// user 'module.expoorts = function() {} to return the methods OR return an object literal

module.exports = {  // object literal

  // user login - assuming req.body has email and pwd values; search 'user' collection
  login: function(req, res) {
    User.findOne( { email: req.body.email}, function(err, user) {
      if (err) { 
        res.json( { status: false, errors: err} )
      } else if (user) { // user exists 
        if (user.validPassword(req.body.password)) { // and passwords match
            req.session['userInfo'] = { // save user data in req.session object
            id: user._id,
            first_name: user.first_name
          } //pass back req.session user data to client (JSON format)
          res.json( { status: true, userInfo: req.session['userInfo']} )
        } else { // but passwords don't match or password is not valid
            res.json( { status: false, errors: 'Problem with credentials. Unable to login.'} )
        }       
      } else { // user doesn't exist
        res.json( { status: false, errors: 'User not found!'} )
      }
    })},

  // add new user, run model validations
  register: function(req, res) {

    // when working from backend to frontend, assume user data is in req.body 
    var user = new User(req.body) // mongoose ORM commands ... new, save, 
    user.save(function(err) {
    
      if (err) { res.json( { status: false, errors: err} ) }
      else {
        req.session['userInfo'] = { //save user data in req.session object
          id: user._id,
          first_name: user.first_name
        } //pass back req.session user data to client (JSON format)
        res.json( { status: true, userInfo: req.session['userInfo'] } )
      }
    })
  }, 

  // get session info 
  session: function(req,res) {
    if (req.session['userInfo']) { 
      res.json( {status: true, userInfo: req.session['userInfo'] } )
    } else {
      res.json( {status: false, userInfo: null} )
    }
  },


  // logout
  logout: function(req, res) {
    req.session.destroy( function(err) {
      if (err) { console.log('error during session destruction?!')
        res.json( { status: false, errors: err } )
      } else { // you must return something to the client
          res.json( { status: true } )
      }
    })
   }
}