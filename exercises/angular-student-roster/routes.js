angular.module("studentRoster").config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<roster />',
  });
  $routeProvider.when('/add', {
    template: '<new-student-form />',
  });
});