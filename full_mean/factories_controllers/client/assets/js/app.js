// app.js
console.log('>> Loading: "client/assets/js/app.js"');

// application for all further work - 'app'
// inject Route provider for client-side spa routing
var app = angular.module('app', ['ngRoute']); 

// === Routes ===
app.config(function ($routeProvider) {
 
  $routeProvider
    .when('/', {
      //controller: 'EditController',
      templateUrl: '../partials/index.html'
    })
    .when ('/friends/new', {
        controller: 'NewController',
        templateUrl: '../partials/new.html'
    })
    .when('/friends/:id/edit', {
          controller: 'EditController',
          templateUrl: '../partials/edit.html'
    });
});
