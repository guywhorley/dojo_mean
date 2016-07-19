// === controllers ===
  app.controller('PlayersController', ['$scope', 'PlayersFactory', '$location', function($scope, PlayersFactory, $location) {
    // for sorting table rows 
    $scope.orderByField = "player";
    $scope.reverseSort = false; 
    $scope.players = PlayersFactory.getPlayers();

    // add player 
    $scope.addPlayer = function () {
      if (!$scope.newPlayer) { return; }
      PlayersFactory.addPlayer($scope.newPlayer);
      $scope.newPlayer = null; 
    }

    // remove player 
    $scope.removePlayer = function (idx) {
      PlayersFactory.removePlayer(idx);
    }
  }])