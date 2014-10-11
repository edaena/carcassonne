'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('carcassonne',[]);

myApp.controller('GameController', ['$scope', function($scope) {
    var board = new Board(6, 6);
    board.buildGame($scope);
    
    $scope.placeTile = function(tile) {
    	console.log("place tile");
		tile.classValue = 'tile';
  };
}]);

/*config(['$routeProvider', function($routeProvider) {
 $routeProvider.otherwise({redirectTo: '/view1'});
 }]);*/
