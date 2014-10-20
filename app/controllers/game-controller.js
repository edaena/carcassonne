var myApp = angular.module('carcassonne',[]);

myApp.controller('GameController', ['$scope', function($scope) {
	var tileSet = getTileSet();
	$scope.nextTile = tileSet.pop();
    var board = new Board(6, 6);
    board.buildGame();
    $scope.tileCells = board.render();
    console.log(board);
    
    $scope.placeTile = function(tileCell, row, col) {
    	if(board.placeTile($scope.nextTile, row, col)){
	    	$scope.nextTile = tileSet.pop();
	    	$scope.tileCells = board.render();
	    }
    };
}]);