 app.controller('AssociationsController', ['$scope', 'AssociationsFactory', 'PlayersFactory', 'TeamsFactory', '$location', function($scope, AssociationsFactory, PlayersFactory, TeamsFactory, $location) {
     // for sorting table rows 
    $scope.orderByField = "player";
    $scope.reverseSort = false; 
    
    // get factory data 
    $scope.assignments = AssociationsFactory.getAssignments();
    $scope.players = PlayersFactory.getPlayers();
    $scope.teams = TeamsFactory.getTeams();

    // add association
    $scope.addAssignment = function () {
      if (!$scope.playerselect || !$scope.teamselect) { return; }
      AssociationsFactory.addAssignment($scope.playerselect, $scope.teamselect);
      $scope.playerselect = null;
      $scope.teamselect = null;
     }

    // remove association 
    $scope.removeAssignment = function (idx) {
      AssociationsFactory.removeAssignment(idx);
    }

  }])