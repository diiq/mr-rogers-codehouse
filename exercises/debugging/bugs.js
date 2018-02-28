// Each of these definitions has a different flaw. Can you find it?

// 1. 
function double(x) {
  x * 2;
}

// 2. 
triple = function(x) {
  return x * 3;
}

// 3. 
function quadruple() {
  return x * 4;
}

// 5. 
const multiply = x, y => x * y;

// 4. 
const quintuple = (x) => { x * 5 };

// 6. 
function sayTimes(n) {
  for(var i = 0; i < n, i++) {
    console.log("Doing it! This is time", i);
  }
}

// 7. 
var greeting = "Hello";
function printHello() {
  var greeting;
  console.log(greeting);
}

// 8. 
var greetings = [
 {word: "hello", emotion: "neutral"},
 {word: "hiya", emotion: "bubbly"},
 {word: "ugh", emotion: "disgusted"}, 
 {word: "omygoshHIIII", emotion: "excited"} 
];
function printGreetings() {
  greetings.forEach(console.log(word));
}

// 9. Imagine this is defined in the context of an angular service, with $http injected
function fetchStudents() {
  return $http.get("https://mr-rogers-codehouse.herokuapp.com/students.json").then(
    response => response.data
    console.log(response.data)
  )
}

// 10. Imagine this is defined in the context of an angular service, with $http injected
function fetchStudents() {
  return $http.get("https://mr-rogers-codehouse.herokuapp.com/students.json").then(
    function(response) {
      this.students = response.data;
    }
  )
}

// 11. I have an angular component, and I've defined a route that should show
//    that component -- but it doesn't. List some things that could be wrong.


// 12. I'm rewriting the Todo list app, but when I add a todo item, nothing
//     happens. List some places you might put a console log in order to help
//     you debug.