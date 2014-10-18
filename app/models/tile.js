var Tile = function(tile){
    this.count = tile['count'];
    this.legalPlacements = tile['legalPlacements'];
    this.img_path = tile['img_path'];
    this.banner = tile['banner'];
    this.rotations = 0;
};

Tile.prototype = {
    buildTile: function(){

    }
};

var TILE_TYPES = {
	'ALL_CITY' : {
        'count' : 1,
        'legalPlacements' : ["in city"],
        'img_path' : "tile_images/all-city_1.png"
    },
    'CITY_EXCEPT_DOWN' : {
        'count' : 3,
        'legalPlacements' : ["in city"],
        'img_path' : "tile_images/city-except-down_3.png"
    },
    'CITY_EXCEPT_DOWN_BAN' : {
        'count' : 1,
        'legalPlacements' : ["in city"],
        'img_path' : "tile_images/city-except-down-ban_1.png",
        'banner': true
    },
    'STARTING_TILE' : {
    	'count' : 1,
    	'legalPlacements' : ["in city"],
        'img_path' : "tile_images/starting-tile_1.png"
    }
};

var getTileSet = function(){
	var result = [];
	var key;
	for(key in TILE_TYPES){
		if(key == 'STARTING_TILE'){
			continue;
		}
		for(var i = 0; i < TILE_TYPES[key]['count']; i++){
			var tile = new Tile(TILE_TYPES[key]);
			result.push(tile);
		}
	}
	return result;
};