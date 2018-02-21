angular.module("studentRoster").component("newStudentForm", {
  templateUrl: "student/new-student-form.html",
  controller: ['StudentService', "$location", function(StudentService, $location) {
    this.name = "";
    this.email = "";
    this.color = "";
    this.colors = ["black", "green", "silver", "gray", "lime", 
    "white", "olive", "yellow", "marron", "navy", "red", 
    "blue", "purple", "fuchsia", "teal", "aqua"];

    this.addItem = function() {
      if (!this.email) return;
      StudentService.addStudent(this.name, this.email, this.color);
      $location.url("/");
    }
  }]
});
