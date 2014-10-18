var myApp = angular.module('carcassonne',[]);

myApp.controller('GameController', ['$scope', function($scope) {
	var tileSet = getTileSet();
	$scope.nextTile = tileSet.pop();
    var board = new Board(6, 6);
    board.buildGame();
    $scope.tileCells = board.render();
    console.log(board);
    
    $scope.placeTile = function(tileCell, row, col) {
    	board.placeTile($scope.nextTile, row, col)
    	//tile.imgPath = $scope.nextTile.imgPath;
    	//tileCell.rotationStyle = $scope.nextTile.rotationStyle; // Tile cells don't rotate
    	//console.log(tile);
    	$scope.nextTile = tileSet.pop();
    	  $scope.tileCells = board.render();
    };
}]);