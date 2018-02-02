function startGame() {
  var start = prompt("Would you like to play a game against the Almighty Grant?").toLowerCase();
  if (start === "yes") {
    var userName = prompt("What is your name, Warrior?");
    startCombat(userName);
  }
}

function getDamage(damage) {
  return Math.floor(Math.random() * 5) + 1;
}

function chooseWinner(grantNumberWins, userNumberWins) {
  if (userNumberWins >= 3) {
    console.log("You have won!");
  } else if (grantNumberWins >= 3) {
    console.log("Grant has won!");
  }
}

function startCombat(userName) {
  var grantPoints = 10;
  var userPoints = 40;
  var grantNumberWins = 0;
  var userNumberWins = 0;
  while (userNumberWins < 3 && grantNumberWins < 3) {
    while (grantPoints > 0 && userPoints > 0) {
      grantPoints = grantPoints - getDamage();
      userPoints = userPoints - getDamage();
      console.log("Grant has " + grantPoints + " health left." );
      console.log(userName + " has " + userPoints + " health left." );
      var attack = confirm("Would you like to attack again?");
    } if (grantPoints <= 0) {
      userNumberWins++;
      grantPoints = 10;
    }
    if (userPoints <= 0) {
        grantNumberWins++;
      }
    }
    chooseWinner(grantNumberWins, userNumberWins);
  }
