function startGame() {
  const play = window.prompt("Do you want to play?");
  if (play === "yes") {
    var name = window.prompt("Enter your name:")
    startCombat(name);
  }
}

function getDamage() {
  const min = 1;
  const max = 5;
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

function startCombat(name) {
  var winCount = 0;
  var userHP = 40;
  var grantHP = 10;
  var choice;

  while ((winCount < 3) && (userHP > 0)) {
    choice = window.prompt("Would you like to attack or quit?");
    if (choice === "attack") {
      userHP = userHP - getDamage();
      grantHP = grantHP - getDamage();
      console.log(name + " has " + userHP + " health left.");
      console.log("Grant the Mighty Chicken has " + grantHP + " health left.");
    } else if (choice === "quit") {
      winCount = 4;
    }
    if (grantHP <= 0) {
      winCount++;
      grantHP = 10;
      if (winCount !== 3) { // Note: Does not show if game has finished.
        console.log("You beat Grant! You need to win " + (3 - winCount) + " more round(s).");
      }
    }
  }

  // Battle results
  if (userHP <= 0 && winCount === 3) {
    console.log("The game ends in a draw.");
  } else if (userHP <= 0) {
    console.log(name + " has lost the game.");
  } else if (winCount === 4) {
    console.log(name + " has quit the game.");
  } else if (winCount === 3) {
    console.log(name + " has defeated Grant the Mighty Chicken!");
  }
}