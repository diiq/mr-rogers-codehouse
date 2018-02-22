angular.module("studentRoster").component("roster", {
  templateUrl: "roster/roster.html",
  controller: ["StudentService", function(StudentService) {
    this.students = [];
    StudentService.fetchStudents().then(
      students => this.students = students
    )
  }]
});
