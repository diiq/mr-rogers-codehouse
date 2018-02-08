// HTTP METHODS

// GET
// POST
// PUT
// DELETE
// ...

// Promises

$.ajax({
      type: "POST",
      url: "https://mr-rogers-codehouse.herokuapp.com/students.json",
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        name: "Sam II",
        email: "sam+again@grandcircus.co",
        favorite_color: "blue"
      })
  })




// Doing the AJAX

const apiUrl = "https://mr-rogers-codehouse.herokuapp.com/";

function fetchStudents() {
  $.get(apiUrl + "students.json").then(
    r => console.log(r)
  )
}