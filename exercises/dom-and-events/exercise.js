// Learning Goals:
// After this lesson, you should be able to:
// - Explain what a DOM element is
// - Retrieve a DOM object for any element on the page
// - Explain what an event handler is, and list several
// - Attach event handler to any element on the page

// STUDENTS: CHANGE THE NAME OF THIS FILE TO exercise-yourname.js
// AND THEN FIX exercise.html TO USE exercise-yourname.js INSTEAD.

// A function that returns the value of the input
function yourName() {
  return document.getElementById("first-input").value;
}

// A function that returns the text of the button
function buttonText(){
  return document.getElementById("go-button").innerText;
}

// A function that sets the greeting to be "Hello, [value of input]!"
function newGreeting(){
  document.getElementById("greeting");
  document.getElementById("greeting").innerText = "Hello, " + yourName() + "!";
}

// Creating new elements
function addButton() {
  const button = document.createElement("button");
  const divs = document.getElementsByClassName("bordered");
  const div = divs[divs.length - 1];
  div.appendChild(button);
  button.innerText = "Baby Button";
}


// A function that runs when the button is clicked (moused-over, focused, etc)
// document.getElementById("go-button").addEventListener("click", newGreeting);
// Doesn't work because button isn't defined yet.

// These all work, but are more verbose:
//
// function hookUpButton() {
//   document.getElementById("go-button").addEventListener("click", newGreeting);
// }
//
///// OR
//
// const hookUpButton = () => {
//   document.getElementById("go-button").addEventListener("click", newGreeting); 
// }

// window.addEventListener("load", hookUpButton);

// Onload.
window.addEventListener("load", () => {
  document.getElementById("go-button").addEventListener("click", newGreeting);
  document.getElementById("add-button").addEventListener("click", addButton); 
});



