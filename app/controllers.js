/**
 * Created by Devon on 2/18/2015.
 */
var foodieAppControllers = angular.module("foodieAppControllers", ["ngRoute","firebase", "foodieAppServices","ngAnimate"]);

foodieAppControllers.controller("HomeController", ["$scope","$firebase", "FirebaseGet",
    function($scope,$firebase, FirebaseGet){

    //uses a service to get non-favorite data from Firebase
    $scope.sandwichList = FirebaseGet.pullNonFavorites();

    $scope.everyoneLikeOrdering = function(item){
        return -item.everyoneLikes;
    };
    $scope.friendsLikeOrdering=function(item){
        return -item.friendsLike;
    };

    $scope.addFavorite = function(item){
        var ref = new Firebase("https://sandwiches-data.firebaseio.com/" + item.$id);
        var sync = $firebase(ref);

        sync.$update({addFavorite: 1}).then(function(ref) {
            console.log("SUCCESS: "+ ref.key());    // bar
        }, function(error) {
            console.log("Error: "+ error);
        });
    };
}]);

foodieAppControllers.controller("RightSidebarController",["$scope", "$firebase", "FirebaseGet",
    function($scope, $firebase, FirebaseGet){

    //uses a service to pull all data from Firebase, though is filtered by favorites in the html
    $scope.sandwichList = FirebaseGet.pullFromFirebase();

    //removes from favorite list, puts back in regular list
    $scope.removeFavorite = function(item){
        var ref = new Firebase("https://sandwiches-data.firebaseio.com/" + item.$id);
        var sync = $firebase(ref);

        sync.$update({addFavorite: 0}).then(function(ref) {
            console.log("SUCCESS: "+ ref.key());    // bar
        }, function(error) {
            console.log("Error: "+ error);
        });
    };
}]);

foodieAppControllers.controller("FavoritesController",["$scope", "$firebase","FirebaseGet", function($scope, $firebase, FirebaseGet){
    $scope.sandwichList = FirebaseGet.pullFavorites();

    $scope.removeFavorite = function(item){
        var ref = new Firebase("https://sandwiches-data.firebaseio.com/" + item.$id);
        var sync = $firebase(ref);

        sync.$update({addFavorite: 0}).then(function(ref) {
            console.log("SUCCESS: "+ ref.key());    // bar
        }, function(error) {
            console.log("Error: "+ error);
        });
    };
}]);
