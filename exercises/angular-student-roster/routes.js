angular.module("studentRoster").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<roster />',
  });
  $routeProvider.when('/add', {
    template: '<new-student-form />',
  });
  $routeProvider.when('/goopy', {
    template: '<div>Happy goopy day</div>',
  });
}]);