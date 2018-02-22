angular.module("studentRoster").component("classInfo", {
  templateUrl: "classInformation/class-information.html",

  controller: ["StudentService", function(StudentService) {
    this.headcount = StudentService.students.length;
    StudentService.fetchStudents().then(
      students => this.headcount = students.length
    )
  }]
});
