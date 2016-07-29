(function() {
'use strict';

  angular
    .module('app')
    .factory('userFactory',factory);

  // this is the point of contact between front-end and backend;
  // makes the http ajax calls 
  function factory($http) {
    var factory = {}; 

    // get session from server
    factory.getSession = function(callback) {
      $http.get('/session') // ajax call
        .then(function(returnData) {
          callback(returnData)
        })
    }

    // add methods to factory object so that I can makes calls to the backend.
    factory.login = function(userInfo, callback) {
      console.log("ng/services/user.js: ", userInfo)
      $http.post('/login', userInfo)
        .then(function(returnData) {
          console.log(returnData)
          callback(returnData)
         })
    }

    factory.register = function(userInfo, callback) {
      $http.post('/register', userInfo)
        .then(function(returnData) {
          callback(returnData)
        })
    }

    factory.logout = function(callback) {
      $http.post('/logout')
        .then(function(returnData) {
          callback(returnData)
        })
    }
    return factory
    }

})();