var myApp = angular.module('carcassonne',[]);

myApp.controller('GameController', ['$scope', function($scope) {
    $scope.player1 = new Player(1);
    $scope.player2 = new Player(2);
    $scope.activePlayer = $scope.player1;
    var tileSet = getTileSet();
	$scope.nextTile = tileSet.pop();
    var board = new Board(11, 11);
    board.buildGame();
    $scope.tileCells = board.render();
    console.log(board);
    
    $scope.placeTile = function(tileCell, row, col) {
    	if(board.placeTile($scope.nextTile, row, col)){
	    	$scope.nextTile = tileSet.pop();
	    	$scope.tileCells = board.render();
            $scope.swapActivePlayer();
	    }
    };
    $scope.swapActivePlayer = function(){
        if($scope.activePlayer == $scope.player1){
            $scope.activePlayer = $scope.player2;
        }
        else{
            $scope.activePlayer = $scope.player1;
        }
    };
}]);