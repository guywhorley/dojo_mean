// app.js
console.log('>> Loading: "client/assets/js/app.js"');

// application for all further work - 'app'
var app = angular.module('app', ['ngRoute']) // inject Route service

// === Routes ===
app.config(function ($routeProvider) {
  // angular routing here...
  $routeProvider
    .when('/', {
      //controller: './controllers/FriendsController',
      templateUrl: '../partials/index.html'
    })
    .when ('/friends/new', {
        //controller: './controllers/friendsController',
        templateUrl: '../partials/new.html'
    })
    .when('/friends/:id/edit', {
          //controller: './controllers/FriendsController',
          templateUrl: '../partials/edit.html'

    })

});

// === Controllers ===
app.controller('FriendsController', ['$scope', 'FriendsFactory', '$location', function ($scope, FriendsFactory, $location) {

    console.log('>> Loading: "client/assets/controllers/FriendsController.js"');



}]);
