angular.module("toDoList").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<full-list />',
  });
  $routeProvider.when('/total', {
    template: '<total-to-do />',
  });
}]);
