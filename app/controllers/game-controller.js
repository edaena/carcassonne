'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('carcassonne',[]);



myApp.controller('GameController', ['$scope', function($scope) {
    var board = new Board();
    board.buildGame($scope);
    $scope.makeMove = function(e, index, parentIndex) {
        board.makeMove($scope, e, index, parentIndex);
    };

}]);

/*config(['$routeProvider', function($routeProvider) {
 $routeProvider.otherwise({redirectTo: '/view1'});
 }]);*/
