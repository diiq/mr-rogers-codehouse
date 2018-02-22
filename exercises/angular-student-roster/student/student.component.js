angular.module("studentRoster").component("student", {
  templateUrl: "student/student.html",
  bindings: {
    student: '<'
  },
  controller: ["$route", "StudentService", function($route, StudentService) {
    this.delete = function() {
      StudentService.deleteStudent(this.student.id).then(
        () => $route.reload()
      )
    }
  }]
});
