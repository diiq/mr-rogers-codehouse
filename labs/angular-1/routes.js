angular.module("toDoList").config(function($routeProvider) {
    $routeProvider.when('/', {
        template: '<list />',
    });

    $routeProvider.when('/info', {
        template: '<page />',
      });
});