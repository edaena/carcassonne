'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('carcassonne',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  var count = 2;
  $scope.tiles = [1, 2];
  
  $scope.addTile = function() {
  	$scope.tiles.push(count + 1);
  	count++;
  };
  
}]);

/*config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
