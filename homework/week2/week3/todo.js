angular.module("Todo", []).controller("TodoCtrl", function($scope)){
	$scope.todoList = [
		"pick up kids","coding","eat"
	]
	$scope.newTodo = function() {
		$scope.todoList.push($scope.newActivity);
	}
}