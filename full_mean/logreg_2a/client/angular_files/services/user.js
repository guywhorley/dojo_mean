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

    // logout - clear session 
    factory.logout = function() {
    }    
    return factory
  }
})();