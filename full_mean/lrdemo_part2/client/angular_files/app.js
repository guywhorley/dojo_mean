// immediate function style
(function() {
  'use strict'; // no globals allowed

  angular
    .module('app', ['ngRoute'])
    .config(config)

  // define routes - could go in a sep. file but keeping it here for now.
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/angular_files/partials/index.html'
      })
      .when('/success', {
        templateUrl: '/angular_files/partials/success.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
})() // immediate function - run it right away