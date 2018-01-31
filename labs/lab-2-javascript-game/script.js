var playerHealth = 40;
var grantHealth = 10;
var winCount = 0;

function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
}

function startCombat() {

  const playerDmg = getDamage();
  const grantDmg = getDamage();

   console.log("You took ", playerDmg, "damage!");
   playerHealth = playerHealth - playerDmg;
   console.log("You have health ", playerHealth, "left.");

   console.log("Grant took ", grantDmg, "damage!");
   grantHealth = grantHealth - grantDmg;
   console.log("Grant has health ", grantHealth, "left.");

}


function startGame() {
  var play = prompt("Would you like to play?");

  if (play === "Yes") {
    var playerName = prompt("What is your name?");
    while (winCount < 3) {
        var continueGame = prompt("Do you want to attack again? (Attack or Quit)")
        if (continueGame === "Attack") {
          startCombat();
          if (grantHealth <= 0 && winCount < 3) {
            winCount++;
            grantHealth = 10;
            console.log("You have defeated Grant ", winCount,"times.");
          } else if (playerHealth <= 0) {
            console.log("You have been defeated.");
            return;
          } else if (winCount === 3) {
            console.log("You have won the game!");
            return;
          }
        }
      }
    }
  }
