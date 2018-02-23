angular.module("app").config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<todo-app />',
  });
});
