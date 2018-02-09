// HTTP METHODS

// GET
// POST
// PUT
// DELETE
// ...

// Promises

// $.ajax({
//       type: "POST",
//       url: "https://mr-rogers-codehouse.herokuapp.com/students.json",
//       dataType: 'json',
//       contentType: 'application/json',
//       data: JSON.stringify({
//         name: "Emily",
//         email: "em.westenbroek@gmail.com",
//         favorite_color: "green"
//       })
//   })




// Doing the AJAX

const apiUrl = "https://mr-rogers-codehouse.herokuapp.com/";

function fetchStudents() {
  $.get(apiUrl + "students.json").then(renderStudents)
}

function renderStudents(students) {
  students.forEach(renderStudent);
}

function renderStudent(student) {
// $("#neato").append("<div>" + student.name + " " student.email + "</div>");
  $("#neato").append(`<div>${student.name} ${student.email}</div>`);
}
