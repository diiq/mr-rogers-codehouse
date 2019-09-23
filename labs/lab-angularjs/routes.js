angular.module("todoApp").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<todoform />',
  });
  $routeProvider.when('/next', {
    template: '<next />',
  });

}]);
