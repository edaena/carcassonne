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
		return this.matchSides(tile.sides[NORTH],edges[NORTH]) && this.matchSides(tile.sides[EAST],edges[EAST]) 
				&& this.matchSides(tile.sides[SOUTH],edges[SOUTH]) && this.matchSides(tile.sides[WEST],edges[WEST]);
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
			edges[NORTH] = northTile.sides[SOUTH]; 
		}
		
		if (eastTile.name) {
			edges[EAST] = eastTile.sides[WEST];
		}
		
		if (southTile.name) {
			edges[SOUTH] = southTile.sides[NORTH]; 
		}
		
		if (westTile.name) {
			edges[WEST] = westTile.sides[EAST]; 
		}
		
		return edges;
	}
	
};