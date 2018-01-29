
var startGame = function(){
  return confirm("do you want to play?");

  if (startGame === true) {
    var name = prompt("Please enter your name");
  }
  else alert("Try again later");

};
console.log(startGame());

if (startGame !== true) {
  var name = prompt("Please enter your name");
}
else alert("Try again later");


  // if (startGame === true) {
  //   var name = prompt("Please enter your name");
  // }
  // else alert("Try again later");


// var userName = function(){
//     return prompt("Whats your name?");
// }
//
// console.log(userName());





function getDamage(max) {
  return Math.floor(Math.random() * 5) + 1;
}

console.log(getDamage());
