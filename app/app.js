'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('carcassonne',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.tile = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3);
  var tiles_remaining = 10;
  $scope.rows = [];
  $scope.cols = [];
  for(var r=0; r<15; ++r) {
  	 $scope.rows.push(r);
  	 $scope.cols.push(r);
  }
  
  $scope.makeMove = function(e, index, parentIndex) {
	if(tiles_remaining-- > 0){  	
		console.log(parentIndex + " "+ index);
		var elem = angular.element(e.srcElement);
		elem.addClass("tile");
		elem.text($scope.tile);
		$scope.tile = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3);
	}	
  };
  
}]);

/*config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
