function startGame() {
  var start = prompt("Would you like to play a game against the Almighty Grant?");
  if (start === "yes") {
   var userName = prompt("What is your name?");
   startCombat(userName);
 }
}

function getDamage(damage) {
    return Math.floor(Math.random() * 5) + 1;
  }

function startCombat(userName) {
  var grantPoints = 10;
  var userPoints = 40;
  var numberWins = 0;
  while (numberWins < 3) {
    while (grantPoints > 0 && userPoints > 0) {
    grantPoints = grantPoints - getDamage();
    userPoints = userPoints - getDamage();
    console.log("Grant has " + grantPoints + " health left." );
    console.log(userName + " has " + userPoints + " health left." );
    var attack = prompt("Do you want to quit or attack again?");
    } if (grantPoints <= 0) {
      numberWins++;
      grantPoints = 10;
      if (numberWins >= 3) {
        console.log("You have won!") //How to display each of the players if they win? What if Grant wins?
      }
    } else if (attack !== "attack") {
      console.log ("");
    }
  }
}
