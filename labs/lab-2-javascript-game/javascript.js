var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var battleName = "";



var playGame = confirm("Shall we battle!"); {
console.log(playGame);

if (playGame === true){
  var battleName = prompt("Enter your battle name!");
  console.log(battleName);

} else { alert("Return when you have obtained the courage to battle!!");
}
}

  while (playGame === true) {
    if (wins === 3) {
      console.log("You beat Grant 3 times, and won the game!");
      break;
    }
    grantHealth -= Math.floor((Math.random() *5) +1);
    userHealth -= Math.floor((Math.random() *5) +1);
    console.log(battleName + ", Your health is now " + userHealth);
    console.log("Grants health is now " + grantHealth);
    console.log("Wins" + "" + wins);
    if (grantHealth <= 0 ){
      wins++;
      grantHealth = 10;
      console.log("You won this round");
    } else if (userHealth <= 0){
      playGame = false;
      console.log("You lose! Try again");
    }
  }
    function getDamage(max) {
      return Math.floor(Math.random() * 5) + 1;
    }





//
//
//
//
// if(initWhile == true) {
//
// 	var name = prompt("Enter your first name");
// 	console.log(name);
// 	document.write(name + "<br/>");
//
// 	while (initWhile == true)
// 	{
// 	console.log("Hello, My name is " + name);
// 	document.write("Hello, My name is " + name + "<br/>");
// 	name += i;
// 	var initWhile = confirm("Would you like to print this again?");
// 	}
// 	console.log("Hello, My name is " + name);
// 	document.write("Hello, My name is " + name);
// }
// else{
// 	alert("try again later");
//
// }
//
//
//



// function startGame(){
//   const confirmation = confirm("Do you want to play?");
//
//   if (confirmation === true) {
//     var name = prompt("Enter your battle name!");
//     console.log(name);
//
//
//     }
//
//   }
//   else alert("Try again later");
//
//   function getDamage() {
//     return Math.floor(Math.random() * 5) + 1;
//   }
//   console.log(getDamage());
//   return confirmation;
//
//
// }
// console.log(startGame());



// var battleName = prompt("Enter your battle name!");


//
// if (startGame === true) {
//   var name = prompt("Please enter your name");
// }
// else alert("Try again later");
