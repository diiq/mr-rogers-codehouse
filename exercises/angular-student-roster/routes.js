angular.module("studentRoster").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<roster students="$resolve.students" />',
    resolve: {
      students: ["StudentService", function(StudentService) {
        return StudentService.fetchStudents();
      }]
    },
  });
  $routeProvider.when('/add', {
    template: '<new-student-form />',
  });
  $routeProvider.when('/goopy', {
    template: '<div>Happy goopy day</div>',
  });
}]);