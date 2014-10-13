var Board = function(numRows, numCols){
   	this.numRows = numRows;
   	this.numCols = numCols;
};

Board.prototype = {
    buildGame : function(scope){
        scope.tileCells = [];
        for (var r = 0; r < this.numRows; ++r) {
		  	scope.tileCells.push([]);
		  	for(var c = 0; c < this.numCols; ++c) {
		  		scope.tileCells[r].push({classValue:''});
		  	}
		  }
    }
};

