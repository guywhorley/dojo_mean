console.log('>> Loading: /server/controllers/friendscontroller.js"')

// require model in order to use it
var mongoose = require('mongoose')
var Friend = mongoose.model('Friend') // getting

function FriendsController () {

  // temp
  var friendslist = [
    { name: 'Chris' },
    { name: 'John' },
    { name: 'Mike' }
  ]

  this.index = function (req, res) {
    // your code here
    res.json(friendslist); // {placeholder:'index'})
  }
  this.create = function (req, res) {
    var friend = new Friend({name: 'Bobby' })
    friend.save(function (err) {
      if (err) {
        res.json('Error during save!')
      } else {
        res.json(friend)
      }
    })
  }
  this.update = function (req, res) {
    // your code here
    res.json({placeholder: 'update'})
  }
  this.delete = function (req, res) {
    // your code here
    res.json({placeholder: 'delete'})
  }
  this.show = function (req, res) {
    // your code here
    res.json({placeholder: 'show'})
  }
}
module.exports = new FriendsController()
