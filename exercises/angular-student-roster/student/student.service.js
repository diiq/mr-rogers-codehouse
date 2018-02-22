angular.module("studentRoster").service("StudentService", ["$http", function($http) {
  this.addStudent = function(name, email, color) {
    return $http.post("https://mr-rogers-codehouse.herokuapp.com/students.json", {
      name: name,
      email: email,
      favorite_color: color,  
    });
  }

  this.deleteStudent = function(studentId) {
    return $http.delete(`https://mr-rogers-codehouse.herokuapp.com/students/${studentId}`);
  }

  this.fetchStudents = function() {
    return $http.get("https://mr-rogers-codehouse.herokuapp.com/students.json").then(
      response => response.data
    )
  }
}]);
