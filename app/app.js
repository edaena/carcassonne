'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('carcassonne',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  var count = 2;
  $scope.rows = [];
  $scope.cols = [];
  
  for(var r=0; r<5; ++r) {
  	 $scope.rows.push(r);
  	 $scope.cols.push(r);
  }
  
  $scope.makeMove = function(e, index, parentIndex) {
  	console.log(parentIndex + " "+ index);
	var elem = angular.element(e.srcElement);
	elem.className='tile';
	alert(elem.className);
  };
  
}]);

/*config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
