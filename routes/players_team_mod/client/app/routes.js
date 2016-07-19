// === routes === 
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/players.html',
      controller: 'PlayersController'
    })
    .when('/players', {
      templateUrl: 'partials/players.html',
      controller: 'PlayersController'
    })
    .when('/teams', {
      templateUrl: 'partials/teams.html',
      controller: 'TeamsController'
    })
    .when('/associations', {
      templateUrl: 'partials/associations.html',
      controller: 'AssociationsController'
    })
    .when('/:team', {
        templateUrl: 'partials/team.html',
        controller: 'teamController'
    })
})