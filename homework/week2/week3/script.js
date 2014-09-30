var helloAngular = angular.module("HelloAngular", []); 
//only first time, need to make sure to list dependencies []

helloAngular.controller("HelloCtrl", function($scope) {
	$scope.logText = function() {
		console.log($scope.myText);
	}
});