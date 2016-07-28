(function() {
'use strict';

  angular
    .module('app')
    .controller('usersController', usersController);

  // -- don't need this -> ControllerController.$inject = ['dependency1'];
  function usersController(userFactory) {
    var _this = this;
    _this.user = null;     
    _this.register = function() {
        userFactory.register(_this.regInfo, function(factoryData) {
        if (factoryData.data.status) {
          _this.user = factoryData.data.userInfo
          console.log(factoryData.data)
        } else {
          
          _this.errors = factoryData.errors
        }
      })
    }
    
    // don't need to use the activate()...
    // activate();
    //function activate() { }
  }
})();