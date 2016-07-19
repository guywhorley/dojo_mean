app.controller('TeamsController', ['$scope', 'TeamsFactory', '$location', function($scope, TeamsFactory, $location){
    // for sorting table rows 
    $scope.orderByField = "team";
    $scope.reverseSort = false; 
    $scope.teams = TeamsFactory.getTeams();

    // add team 
    $scope.addTeam = function () {
      if (!$scope.newTeam) { return; }
      TeamsFactory.addTeam($scope.newTeam);
      $scope.newTeam = null;
    }
    
    // remove team 
    $scope.removeTeam = function (idx) {
      TeamsFactory.removeTeam(idx);
    }
  }])