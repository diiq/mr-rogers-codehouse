var grantHP = 10
var playerHP = 40
var winCount = 0

function startGame() {
  const play = prompt("Would you like to play?");
  if (play === "yes") {
    var playerName = prompt("Enter you player name");
    startCombat();
  }
}

function gameEnd() {
  if (winCount === 3) {
    console.log ("You have defeated the Almighty Grant!");
  } else if (playerHP <= 0) {
    console.log ("The Almighty Grant has won.");
  }
}

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


function startCombat() {
  while((winCount < 3) && (grantHP > 0) && (playerHP > 0)) {
    var attackChoice = prompt("Would you like to attack or quit?"); // put attack and quit in ""
    if (attackChoice === "attack") {
      grantHP = grantHP - getDamage();
      playerHP = playerHP - getDamage();
      console.log ("The Almighty Grant has " + grantHP + " health left."); // still logs when Grant HP is less than 0
      console.log ("PLACEHOLDER" + " has " + playerHP + " health left."); // could not get playerName to be defined
      if (grantHP <= 0) {
        winCount = winCount + 1;
        grantHP = 10;
        console.log ("You have beat the Grant!" + " You need to win " + (3 - winCount) + " more round(s)." );
      } else {
        gameEnd() // wont go to game end
      }
    } else if (attackChoice === "quit") {
      console.log ("PLACEHOLDER" + userHP + winCount);
      break;
    }
  }
}

function getDamage() {
  const min = 1;
  const max = 5;
  return (Math.floor(Math.random() * (max - min + 1) + min));
}




// (grantHP - 1 || grantHP - 2) && (playerHP - 1 || playerHP - 2)











// function getDamage() {
//


//


// while player HP is > 0, -1 || -2
// OR white grant HP is > 0, -1 || -2


// const min = 1;
// const max = 5;
// return (Math.floor(Math.random() * (max - min + 1) + min));
// }
