/**
 * Created by Devon on 2/18/2015.
 */
var foodieAppControllers = angular.module("foodieAppControllers", ["ngRoute","firebase", "foodieAppServices"]);

foodieAppControllers.controller("HomeController", ["$scope", "$firebase", "FirebaseGet", function($scope, firebase, FirebaseGet){


    $scope.sandwichList = FirebaseGet.pullFromFirebase();
    console.log($scope.sandwichList);


}]);

