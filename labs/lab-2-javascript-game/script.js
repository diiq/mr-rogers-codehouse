var playerHealth = 40;
var grantHealth = 10;
var winCount = 0;

function getDamage() {
    damage = Math.floor(Math.random() * 5) + 1
    return damage
}

function startCombat(damage) {
   damage = getDamage();
   console.log("You took ", damage, "damage!");
   playerHealth = playerHealth - damage;
   console.log("You have health ", playerHealth, "left.");

  damage = getDamage();

   console.log("Grant took ", damage, "damage!");
   grantHealth = grantHealth - damage;
   console.log("Grant has health ", grantHealth, "left.");
}


function startGame() {
  var play = prompt("Would you like to play?");

  if (play === "Yes") {
    var playerName = prompt("What is your name?");
    while (play === "Yes") {
        startCombat();
        if (grantHealth <= 0 && winCount < 3) {
          winCount++;
          grantHealth = 10;
          console.log("You have defeated Grant ", winCount,"times.");
        } else if (playerHealth <= 0) {
          console.log("You have been defeated.");
        } else if (winCount == 3) {
          console.log("You have won the game!");
          return
        }
      }
    }
  }
