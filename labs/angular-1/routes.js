angular.module("app").config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<todo-app />',
  });

  $routeProvider.when('/info', {
    template: '<info />',
  });
});
