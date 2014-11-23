var Board = function(numRows, numCols) {
	this.numRows = numRows;
	this.numCols = numCols;
	this.tileCells = [];
};

var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var allow = true;

Board.prototype = {
	buildGame : function() {
		for (var r = 0; r < this.numRows; ++r) {
			this.tileCells.push([]);
			for (var c = 0; c < this.numCols; ++c) {
				this.tileCells[r].push({});
			}
		}

	},
	render : function() {
		return this.tileCells;
	},
	placeTile : function(tile, row, col) {
		console.log("tile: " + tile.sides);
		if(!this.validatePlay(tile, row, col))
			return false;
		this.tileCells[row][col] = tile;
		return true;
	},
	validatePlay : function(tile, row, col) {
		var edges = this.getNeighborEdges(row, col);
		if (edges[NORTH] === '' && edges[EAST] === '' && edges[SOUTH] === '' && edges[WEST] === '') {
			if(!allow) {
				 return false;
			}
			allow = false;
		}
		
		return this.matchSides(tile.getSide(NORTH),edges[NORTH]) && this.matchSides(tile.getSide(EAST),edges[EAST]) 
				&& this.matchSides(tile.getSide(SOUTH),edges[SOUTH]) && this.matchSides(tile.getSide(WEST),edges[WEST]);
	},
	matchSides : function(current, expected) {
		return current === expected || expected === '';
	},
	getNeighborEdges : function(row, col) {
		
		var edges = ['', '', '', ''];
		
		// Edge cases not necessary due to sufficient size of grid
		var northTile = this.tileCells[row - 1][col];
		var eastTile = this.tileCells[row][col + 1];
		var southTile = this.tileCells[row + 1][col];
		var westTile = this.tileCells[row][col - 1];
		
		if (northTile.name) {
			edges[NORTH] = northTile.getSide(SOUTH); 
		}
		
		if (eastTile.name) {
			edges[EAST] = eastTile.getSide(WEST);
		}
		
		if (southTile.name) {
			edges[SOUTH] = southTile.getSide(NORTH); 
		}
		
		if (westTile.name) {
			edges[WEST] = westTile.getSide(EAST); 
		}
		
		return edges;
	}
	
};