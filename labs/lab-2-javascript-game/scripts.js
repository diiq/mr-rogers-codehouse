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
  var grantNumberWins = 0;
  var userNumberWins = 0;
  while (userNumberWins < 3 && grantNumberWins < 1) {
    while (grantPoints > 0 && userPoints > 0) {
      grantPoints = grantPoints - getDamage();
      userPoints = userPoints - getDamage();
      console.log("Grant has " + grantPoints + " health left." );
      console.log(userName + " has " + userPoints + " health left.");
      var attack = prompt("Do you want to quit or attack?");
      if (attack !== "attack") {
        return;
      }
    }

    if (grantPoints <= 0) {
      userNumberWins++;
      grantPoints = 10;
    }
  }

  if (userNumberWins >= 3) {
    console.log("You have won!");
  } else if (grantNumberWins = 1) {
    console.log("Grant has won!");
  }
}
