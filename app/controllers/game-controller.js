'use strict';

var myApp = angular.module('carcassonne',[]);

myApp.controller('GameController', ['$scope', function($scope) {
	var tileSet = getTileSet();
	$scope.nextTile = tileSet.pop();
    var board = new Board(6, 6);
    board.buildGame($scope);
    console.log(board);
    $scope.placeTile = function(tile) {
    	var img = $scope.nextTile.img_path;
		tile.img = img;
    	console.log("blah" + tile.img);
    	$scope.nextTile = tileSet.pop();
    };
}]);

/*config(['$routeProvider', function($routeProvider) {
 $routeProvider.otherwise({redirectTo: '/view1'});
 }]);*/
