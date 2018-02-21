angular.module("studentRoster").service("StudentService", ["$http", function($http) {
  this.students = [{
    name: "Sam Bleckley",
    email: "sam@grandcircus.co",
    favorite_color: "red",
  }];

  this.addStudent = function(name, email, color) {
    this.students.push({
      name: name,
      email: email,
      favorite_color: color,  
    })
  }

  this.fetchStudents = function() {
    return this.students;
  }
}]);
