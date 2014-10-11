'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('carcassonne',[]);

var getImagePath = function(img){
	return "<img src='tile_images/" + img + ".png'>";
}

myApp.controller('GameController', ['$scope', function($scope) {
	var tileNames = ['all-city_1', 'city-except-down_3', 'city-except-down_3', 'city-except-down_3'];
  var tileIndex = 0;
  $scope.nextTile = getImagePath(tileNames[tileIndex]);
  $scope.rows = [];
  $scope.cols = [];
  
  $scope.tileCells = [];
  
  // Build an array with 5 rows and 5 tiles, TO-DO change the size
  for (var r = 0; r < 5; ++r) {
  	// Container for the tiles from a particular row
  	$scope.tileCells.push([]);
  	for(var c = 0; c < 5; ++c) {
  		$scope.tileCells[r].push({classValue:''}); // pushing a tile, TO-DO create tile object;
  	}
  }
  
  $scope.placeTile = function(tile) {
	tile.classValue = 'tile';
  };
    
}]);

/*config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
