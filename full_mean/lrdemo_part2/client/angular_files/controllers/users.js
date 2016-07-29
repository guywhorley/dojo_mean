(function() {
'use strict';

  angular
    .module('app')
    .controller('usersController', usersController);

  // -- don't need this -> ControllerController.$inject = ['dependency1'];
  function usersController(userFactory, $location) {
    var _this = this;
    _this.user = null; // initially set to null. We will check if req.session has 
                       // a valid session. If so, _this.user is then set to a valid
                       // user object (with id and name)  
    
    // get session 
    function getSession () {
      userFactory.getSession(function(factoryData) {
        _this.user = factoryData.data.userInfo
        if (!_this.user) {
          $location.url('/')
        }
        console.log('>> getSession.user: ', _this.user)    
      })
    } 
    getSession() // check the req.session for ['userInfo']. Will exist if user is logged in.

    // Register User
    _this.register = function() {
        _this.errors = []
        userFactory.register(_this.regInfo, function(factoryData) {
        if (factoryData.data.status) {
          _this.user = factoryData.data.userInfo
          $location.url('/success')
          // console.log(factoryData.data)
        } else {
          _this.errors = factoryData.errors
        }
      })
    }

    // Logout
    _this.logout = function() {
      userFactory.logout(function(factoryData) {
        if (factoryData.data.status) {
            $location.url('/')
        } else {
          _this.errors = factoryData.data.errors
        }       
      })
    }

    // Login User 
    _this.login = function() {
      _this.errors = []
      userFactory.login(_this.logInfo, function(factoryData) {
        //console.log("ng/controllers/users.js - raw: ", factoryData)
        if (factoryData.data.status) { // user login okay
          _this.user = factoryData.data.userInfo
          $location.url('/success')
        } else { // error logging in
          //console.log("ng/controllers/users.js - errors ", factoryData.data.errors)
          _this.errors = factoryData.data.errors
        }        
      })
    }

  }
})();