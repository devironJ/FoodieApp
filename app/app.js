'use strict';

var foodieApp = angular.module('foodieApp', ['ngRoute', 'foodieAppControllers']);

foodieApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "view1/view1.html",
        controller: "HomeController"
    });
    $routeProvider.when("/turkey",{
        templateUrl: "view2/view2.html",
        controller: "View2Controller"
    });
    $routeProvider.otherwise({
        redirectTo: "/home"
    });
}]);
