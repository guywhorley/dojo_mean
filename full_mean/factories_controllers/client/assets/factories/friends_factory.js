console.log('>> Loading: "client/assets/factories/friends_factory.js"');

app.factory('friendsFactory', ['$http', function ($http) {

  // constructor for our factory
  var friends = [];
  var friend = [];

  function FriendsFactory() {
    var _this = this;

    // Create new friend in database 
    this.create = function (newfriend, callback) {
      // newfriend from new.html
      $http.post('/friends', newfriend).then(function (returned_data) {
        console.log(returned_data.data);
        if (typeof (callback) == 'function') {
          callback(returned_data.data);
        }
      });
    };

    // Update document in database
    this.update = function () { // what parameters do we need?
      // Your code here
    };
    
    // get all friends from database
    this.index = function (callback) {
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then( function (returned_data) {
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      })
      //Note: this can be shortened to $http.get('/friends').then(callback); 
      //But only if you only want to run the callback from the controller.
    };
    
    // delete document in database 
    this.delete = function () {// what parameters do we need?
      // Your code here
    };
    
    // show details of one document 
    this.show = function () {// what parameters do we need?
      // Your code here
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    
    // get all friends
    this.getFriends = function (callback) {
      callback(friends);
    };
    
    // get one friend 
    this.getFriend = function (callback) {
      callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);