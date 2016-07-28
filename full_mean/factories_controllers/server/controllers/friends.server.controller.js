console.log('>> Loading: "server/controllers/friends.server.controller.js"')

// require model in order to use it
var mongoose = require('mongoose')
var Friend = mongoose.model('Friend') // getting the mongoose model

function FriendsController () {

 // temp
 var friendslist = [
    { name: 'Chris' },
    { name: 'John' },
    { name: 'Mike' }
  ];

  // get all friends from friends collection
  this.index = function (req, res, next) {
    //var friendslist = Friend.find({});
    //console.log(JSON.stringify(friendslist));
    res.json(friendslist); // {placeholder:'index'})
  }
  this.create = function (req, res, next) {
    var friend = new Friend({name: 'Bobby'});
    friend.save(function (err) {
      if (err) {
        return next(err);
        //res.json('Error during save!');
      } else {
        res.json(friend);
      }
    })
  }
  this.update = function (req, res) {
    // your code here
    res.json({placeholder: 'update'});
  }
  this.delete = function (req, res) {
    // your code here
    res.json({placeholder: 'delete'});
  }
  this.show = function (req, res) {
    // your code here
    res.json({placeholder: 'show'});
  }
}
module.exports = new FriendsController();
