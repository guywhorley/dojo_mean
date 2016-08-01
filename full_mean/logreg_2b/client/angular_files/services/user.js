(function() {
'use strict';

  angular
    .module('app')
    .factory('userFactory', factory);

  // the factory is responsible for communicating with server b/e api
  function factory ($http) {
    var factory = {}

    // user login
    factory.login = function (userInfo, callback) {
      $http.post('/login', userInfo)
        .then (function(returnData) {
          callback(returnData)
         })
    }
    
    // register the new user 
    factory.register = function(userInfo, callback) {
      $http.post('/register', userInfo)
        .then (function(returnData) {
          callback(returnData) // status check is being done in callback f(x)
        })
    }

    // get session 
    factory.getSession = function(callback) {
      $http.get('/session')
        .then(function(returnData) {
          callback(returnData)
        })
    }

    // logout - clear session 
    factory.logout = function(callback) {
      $http.post('/logout')
        .then(function(returnData) {
          callback(returnData)
        })
    }    
    return factory
  }
})();