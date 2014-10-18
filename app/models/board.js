var Board = function(numRows, numCols){
   	this.numRows = numRows;
   	this.numCols = numCols;
   	this.tileCells = [];
};

Board.prototype = {
    buildGame : function(){
        for (var r = 0; r < this.numRows; ++r) {
		  	this.tileCells.push([]);
		  	for(var c = 0; c < this.numCols; ++c) {
		  		this.tileCells[r].push({});
		  	}
		}
    },
    render : function(){
    	return this.tileCells;
    },
    placeTile: function(tile, row, col) {
    	this.tileCells[row][col] = tile;
    }
};

