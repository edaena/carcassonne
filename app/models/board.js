var getImagePath = function(img){
    return "<img src='tile_images/" + img + ".png'>";
}

var Board = function(){
    this.tileIndex = 0;
    this.tileNames = ['all-city_1', 'city-except-down_3', 'city-except-down_3', 'city-except-down_3'];
}

Board.prototype = {
    buildGame : function(scope){
        console.log(this.tileIndex);

        scope.nextTile = getImagePath(this.tileNames[this.tileIndex]);
        scope.rows = [];
        scope.cols = [];
        for(var r=0; r<15; ++r) {
            scope.rows.push(r);
            scope.cols.push(r);
        }
    },

    makeMove : function(scope, e, index, parentIndex) {
        if (this.tileIndex < this.tileNames.length) {
            console.log(this.tileNames);
            var tileName = this.tileNames[this.tileIndex++];
            console.log(parentIndex + " " + index);
            var elem = angular.element(e.srcElement);
            elem.addClass("tile");
            elem.addClass("all-city");
            var imagePath = getImagePath(tileName);
            scope.nextTile = imagePath;
            elem.html(imagePath);
        }
    }

}

