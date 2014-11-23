var Tile = function(tile){
	this.name = tile.name;
    this.count = tile.count;
    this.legalPlacements = tile.legalPlacements;
    this.imgPath = tile.imgPath;
    this.banner = tile.banner;
    this.rotations = 0;
    this.rotationStyle = "";
    this.sides = tile.sides;
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
    },
    getSide: function(direction){
    	var orientation = (4 + direction - this.rotations) % 4;
    	return this.sides[orientation];
    }
};

var SIDES = {
	city : "city",
	road : "road",
	land : "land"
};

var STARTING_TILE =
        new Tile({name: 'STARTING_TILE', count: 1, legalPlacements: ["in city", "on road"], imgPath: "tile_images/starting-tile_1.png", sides: [SIDES.city, SIDES.road, SIDES.land, SIDES.road]});


// sides : [north, east, south, west]
var TILE_TYPES = [ 
	{name: 'ALL_CITY', count: 1, legalPlacements: ["in city"], imgPath: "tile_images/all-city_1.png", banner: false, sides: [SIDES.city, SIDES.city, SIDES.city, SIDES.city]},
    {name: 'CITY_EXCEPT_DOWN_BAN', count: 1, legalPlacements: ["in city"], imgPath: "tile_images/city-except-down-ban_1.png", banner: true, sides: [SIDES.city, SIDES.city, SIDES.land, SIDES.city] },
    {name: 'CITY_EXCEPT_DOWN_ROAD_BAN', count: 2, legalPlacements: ["in city", "on road"], imgPath: "tile_images/city-except-down-road-ban_2.png", banner: true, sides: [SIDES.city, SIDES.city, SIDES.road, SIDES.city] },
    {name: 'CITY_EXCEPT_DOWN_ROAD', count: 1, legalPlacements: ["on road", "in city"], imgPath: "tile_images/city-except-down-road_1.png", banner: false, sides: [SIDES.city, SIDES.city, SIDES.road, SIDES.city] },
    {name: 'CITY_EXCEPT_DOWN', count: 3, legalPlacements: ["in city"], imgPath: "tile_images/city-except-down_3.png", banner: false, sides: [SIDES.city, SIDES.city, SIDES.land, SIDES.city] },
    {name: 'CITY_LEFT_RIGHT_BAN', count: 2, legalPlacements : ["in city"], imgPath : "tile_images/city-left-right-ban_2.png", banner: true, sides: [SIDES.land,SIDES.city, SIDES.land, SIDES.city]},
    {name: 'CITY_LEFT_RIGHT', count: 1, legalPlacements : ["in city"], imgPath : "tile_images/city-left-right_1.png", banner: false, sides: [SIDES.land,SIDES.city, SIDES.land, SIDES.city]},
    {name: 'CITY_UP_DOWN_SEPARATE', count: 2, legalPlacements : ["in city up", "in city down"], imgPath : "tile_images/city-up-down-separate_3.png", banner: false, sides: [SIDES.city, SIDES.land, SIDES.city, SIDES.land]},
    {name: 'ROAD_UP_DOWN', count: 8, legalPlacements: ["on road"], imgPath: "tile_images/road-up-down_8.png", banner: false, sides: [SIDES.road, SIDES.land, SIDES.road, SIDES.land]},
    {name: 'MONASTERY_ROAD', count: 2, legalPlacements: ["on monastery", "on road"], imgPath: "tile_images/mon-road_2.png", sides: [SIDES.land, SIDES.land, SIDES.road, SIDES.land]},
];

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