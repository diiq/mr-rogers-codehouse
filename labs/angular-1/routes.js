angular.module("todoList").config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<todo-list />',
  });
  $routeProvider.when('/send', {
    template: '<win-money />',
  });
});