'use strict';

var foodieApp = angular.module('foodieApp', ['ngRoute', 'foodieAppControllers']);

foodieApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "view1/view1.html",
        controller: "HomeController"
    });
    $routeProvider.when("/list",{
        templateUrl: "view2/view2.html",
        controller: "HomeController"
    });
    $routeProvider.otherwise({
        redirectTo: "/home"
    });
}]);
