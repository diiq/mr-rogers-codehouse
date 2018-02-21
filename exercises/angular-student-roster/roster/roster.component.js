angular.module("studentRoster").component("roster", {
  templateUrl: "roster/roster.html",
  controller: ["StudentService", function(StudentService) {
    this.students = [];
    this.students = StudentService.fetchStudents();
  }]
});
