var Tile = function(type){
    this.type = type;
};

Tile.prototype = {
    buildTile: function(){

    }
};

var TILE_TYPES = {
    ALL_CITY : {
        count : 1,
        legalPlacements : ["in city"],
        img_path : "<img src='tile_images/all-city_1.png>"
    }
};

