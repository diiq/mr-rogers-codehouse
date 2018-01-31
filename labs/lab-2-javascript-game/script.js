function startGame() {
  const play = prompt("Would you like to play?");
  if (play === "yes") {
    var playerName = prompt("Enter you player name");
    startCombat(playerName);
  }
}

function gameEnd(playerHP, winCount) {
  if ((winCount === 3) && (playerHP < 0)) {
    console.log ("The game has ended with a draw.");
  } else if (winCount === 3) {
    console.log ("You have defeated the Almighty Grant!!");
  } else if (playerHP <= 0) {
    console.log ("YOU LOST!! The Almighty Grant has won, taken over the planet, and destroyed humanity.");
  }
}

function getDamage() {
  const min = 1;
  const max = 5;
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

function startCombat(playerName) {
  var grantHP = 10
  var playerHP = 40
  var winCount = 0
  while((winCount < 3) && (grantHP > 0) && (playerHP > 0)) {
    var attackChoice = prompt("Would you like to \"attack\" or \"quit\"?");
    if (attackChoice === "attack") {
      grantHP = grantHP - getDamage();
      playerHP = playerHP - getDamage();
      console.log ("The Almighty Grant has " + grantHP + " health left."); // still logs when Grant HP is less than 0
      console.log (playerName + " has " + playerHP + " health left.");
      if (grantHP <= 0) {
        winCount = winCount + 1;
        grantHP = 10;
        console.log ("You have beat the Grant!" + " You need to win " + (3 - winCount) + " more round(s)." );
      }
    } else if (attackChoice === "quit") { // Ask Sam if there is any reason this is a bad idea
      console.log (playerName + " has quit the game. " + "Remaining Health Points: " + playerHP + ", Total Wins: " + winCount);
     break;
    }
  }
  gameEnd(playerHP, winCount);
}


// ________ ASK ABOUT THE FOLLOWING IN CLASS __________

// break keyword

// playerName // could not get playerName to be defined
      // why does this need to be called out in the function parameters?


// function startCombat() {
//   var attackChoice = prompt("Would you like to attack or quit?"); // put attack and quit in ""
//   if (attackChoice === "attack") {
//     while((winCount < 3) && (grantHP > 0) && (playerHP > 0)) {
//       grantHP = grantHP - getDamage();
//       playerHP = playerHP - getDamage();
//       console.log ("The Almighty Grant has " + grantHP + " health left.");
//       console.log ("PLACEHOLDER" + " has " + playerHP + " health left."); // could not get playerName to be defined
//     } if (grantHP <= 0) {
//       winCount = winCount + 1;
//       grantHP = 10; // can't get loop to start over with grantHP at 10
//       console.log ("You have beat the Grant!" + " You need to win " + (3 - winCount) + " more round(s)." );
//     } else {
//       gameEnd()
//     }
//   else if (attackChoice === "quit") {
//     console.log ("PLACEHOLDER" + userHP + winCount);
//     break;
//     }
//   }
// }
