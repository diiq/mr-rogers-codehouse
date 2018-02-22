angular.module("app").config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<list />',
  });
  $routeProvider.when('/page', {
    template: '<new-page />',
  });
});
