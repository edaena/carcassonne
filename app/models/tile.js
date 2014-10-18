var Tile = function(tile){
	this.name = tile.name;
    this.count = tile.count;
    this.legalPlacements = tile.legalPlacements;
    this.imgPath = tile.imgPath;
    this.banner = tile.banner;
    this.rotations = 0;
    this.rotationStyle = "";
};

Tile.prototype = {
    buildTile: function(){
    	console.log('hello');
    },
    rotate: function(){
    	this.rotations++;
    	this.rotations %= 4;
    	switch(this.rotations){
    		case 0:
    			this.rotationStyle = "";
    			break;
    		case 1:
    			this.rotationStyle = "rotate-90";
    			break;
    		case 2:
    			this.rotationStyle = "rotate-180";
    			break;
    		case 3:
    			this.rotationStyle = "rotate-270";
    	}
    }
};

var TILE_TYPES = [ 
	{name: 'ALL_CITY', count: 1, legalPlacements: ["in city"], imgPath: "tile_images/all-city_1.png", banner: false},
	{name: 'CITY_EXCEPT_DOWN', count: 3, legalPlacements: ["in city"], imgPath: "tile_images/city-except-down_3.png", banner: false },
	{name: 'CITY_EXCEPT_DOWN_BAN', count: 1, legalPlacements: ["in city"], imgPath: "tile_images/all-city_1.png", banner: true },
	{name: 'STARTING_TILE', count: 1, legalPlacements: ["in city"], imgPath: "tile_images/all-city_1.png", banner: false}];


var getTileSet = function(){
	var tiles = [];
	var key;
	console.log(TILE_TYPES.length);
	
	for (var i=0; i<TILE_TYPES.length; ++i) {
		var tileType = TILE_TYPES[i];
		
		if(tileType.name == 'STARTING_TILE'){
			continue;
		}
		
		for(var j = 0; j < tileType.count; ++j){
			var tile = new Tile(tileType);
			tiles.push(tile);
		}
	}

	return tiles;
};