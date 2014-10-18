'use strict';

var myApp = angular.module('carcassonne',[]);

myApp.controller('GameController', ['$scope', function($scope) {
	var tileSet = getTileSet();
	$scope.nextTile = tileSet.pop();
    var board = new Board(6, 6);
    board.buildGame($scope);
    console.log(board);
    $scope.placeTile = function(tile) {
    	tile.img = $scope.nextTile.img_path;
    	console.log(tile);
    	$scope.nextTile = tileSet.pop();
    };
    $scope.rotate = function(){
    	console.log("Heh");
    	$scope.nextTile.rotations++;
    	$scope.nextTile.rotations %= 4;
    	switch($scope.nextTile.rotations){
    		case 0:
    			$scope.nextTile.rotation_style = "";
    			break;
    		case 1:
    			$scope.nextTile.rotation_style = "rotate-90";
    			break;
    		case 2:
    			$scope.nextTile.rotation_style = "rotate-180";
    			break;
    		case 3:
    			$scope.nextTile.rotation_style = "rotate-270";
    	}
    };
}]);

/*config(['$routeProvider', function($routeProvider) {
 $routeProvider.otherwise({redirectTo: '/view1'});
 }]);*/
