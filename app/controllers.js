/**
 * Created by Devon on 2/18/2015.
 */
var foodieAppControllers = angular.module("foodieAppControllers", ["ngRoute","firebase", "foodieAppServices"]);

foodieAppControllers.controller("HomeController", ["$scope", "$firebase", "FirebaseGet", function($scope, $firebase, FirebaseGet){

    //uses a service to get data from Firebase
    //$scope.sandwichList = FirebaseGet.pullFromFirebase();
    $scope.sandwichList = FirebaseGet.pullNonFavorites();
    console.log($scope.sandwichList);

    $scope.addFavorite = function(item){
        var ref = new Firebase("https://sandwiches-data.firebaseio.com/" + item.$id);
        var sync = $firebase(ref);

        sync.$update({addFavorite: 1}).then(function(ref) {
            console.log("SUCCESS: "+ ref.key());    // bar
        }, function(error) {
            console.log("Error: "+ error);
        });
    };

    //$scope.removeFavorite = function(item){
    //    var ref = new Firebase("https://sandwiches-data.firebaseio.com/" + item.$id);
    //    var sync = $firebase(ref);
    //
    //    sync.$update({addFavorite: 0}).then(function(ref) {
    //        console.log("SUCCESS: "+ ref.key());    // bar
    //    }, function(error) {
    //        console.log("Error: "+ error);
    //    });
    //};

    //$scope.pullFavorites = function(item){
    //    var ref = new Firebase("https://sandwiches-data.firebaseio.com/");
    //    ref.orderByChild("addFavorite").equalTo(1).on("value", function(snapshot){
    //        return
    //    })
    //}
}]);

foodieAppControllers.controller("RightSidebarController",["$scope", "$firebase", "FirebaseGet", function($scope, $firebase, FirebaseGet){
    $scope.sandwichList = FirebaseGet.pullFromFirebase();
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

