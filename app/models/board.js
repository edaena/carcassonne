var getImagePath = function(img){
    return "<img src='tile_images/" + img + ".png'>";
}

var Board = function(numRows, numCols){
    //this.tileIndex = 0;
   	this.numRows = numRows;
   	this.numCols = numCols;
    //this.tileNames = ['all-city_1', 'city-except-down_3', 'city-except-down_3', 'city-except-down_3'];
}

Board.prototype = {
    buildGame : function(scope){
        scope.tileCells = [];
  
		  // Build an array with 5 rows and 5 tiles, TO-DO change the size
		  for (var r = 0; r < this.numRows; ++r) {
		  	// Container for the tiles from a particular row
		  	scope.tileCells.push([]);
		  	for(var c = 0; c < this.numCols; ++c) {
		  		scope.tileCells[r].push({classValue:''}); // pushing a tile, TO-DO create tile object;
		  	}
		  }
    }
}

