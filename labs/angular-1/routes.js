angular.module("todoListApp").config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<todo-list />',
  });
  $routeProvider.when('/stats', {
    template: '<todo-stats />',
  });
});
