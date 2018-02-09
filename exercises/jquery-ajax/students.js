// HTTP METHODS

// GET
// POST
// PUT
// DELETE
// ...

// Doing the AJAX

const apiUrl = "https://mr-rogers-codehouse.herokuapp.com/";

function renderStudent(student) { /// student == {name: "Goo", email: "bah"}
  $("#neato").append(`<div>${student.name} (${student.email})</div>`);
}

function renderStudents(students) {
  students.forEach(renderStudent);
}

// Promises take .then, then a function:
function fetchStudents() {
  $.get(apiUrl + "students.json").then(renderStudents);
}


// With arrow functions, you can do it all in one go (but you don't have to)
function fetchStudents2() {
  $.get(apiUrl + "students.json").then(students => {
    students.forEach(student => $("#neato").append(student.name));
  });
}


// GET to fetch the list, POST to create a new item:
function createStudent(name, email, color) {
  $.ajax({
      type: "POST",
      url: "https://mr-rogers-codehouse.herokuapp.com/students.json",
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name,
        email: email,
        favorite_color: color
      })
  })
}

// See what happens if you POST the same item twice! Then check out the
// Networking tab in the inspector to investigate more of what's happening.


// Exercises: 
// make a form to create new students
// make a better-looking display of each student
// make buttons to delete students (use DELETE on "students/{student.id}.json")