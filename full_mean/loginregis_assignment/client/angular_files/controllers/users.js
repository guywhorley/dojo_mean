(function() {
'use strict';

  angular
    .module('app')
    .controller('usersController', usersController);

  function usersController(userFactory, $location) {
    var _this = this;
    _this.errors = []

    function getSession () {
      userFactory.getSession(function(factoryData) {
        _this.user = factoryData.data.userInfo
        if (!_this.user) { $location.url('/') }   
    })}

    getSession() // get session info if it is present

    // log the user into the application
    _this.login = function () { // don't need to pass params since controller has access to user input via ng-model=''
      // clear user errors prior to login op
      _this.errors = []
      userFactory.login(_this.logInfo, function(factoryData) {
        console.log("FactoryData: ", factoryData.data)
        if (factoryData.data.status) {
          _this.user = factoryData.data.userInfo
          $location.url('/success')
        } else {
          _this.errors = factoryData.data.errors
        }       
      })
    },

    // logout 
    _this.logout = function () {
      userFactory.logout(function(factoryData) {
        if (factoryData.data.status) {
          $location.url('/')
        } else {
          _this.errors = factoryData.data.errors
          console.log("Error on logout")
        }       
      })
    },

    // register the user - call the factory method
    _this.register = function () {
      userFactory.register(_this.regInfo, function(factoryData) {
        if (factoryData.data.status) {
          _this.user = factoryData.data.userInfo
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }
  }
})();