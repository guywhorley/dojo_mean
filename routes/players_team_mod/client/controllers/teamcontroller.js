  app.controller('teamController', function($scope, TeamsFactory, $routeParams) {
    console.log($routeParams);
    $scope.team = $routeParams.team;
  })