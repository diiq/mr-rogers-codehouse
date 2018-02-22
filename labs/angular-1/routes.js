angular.module("toDoList").config(function($routeProvider) {
    $routeProvider.when('/', {
        template: '<list />',
    });
});