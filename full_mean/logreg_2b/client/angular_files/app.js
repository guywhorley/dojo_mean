// this is the js file where I define the angular application and routes to the client-side partials

(function() { // immediate functions IIFE... immed invoked function expression
  'use strict';

  // define ng application
  angular
    .module('app', ['ngRoute'])
    .config(config)

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
})() // run this right away to get 'app'. If it isn't run right away, ng complains about module 'app' not being found.