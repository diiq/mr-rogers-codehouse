var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var playGame = true;
var battleName = "";

function startGame() {
  var playGame = confirm("Shall we battle?");
  if (playGame === true) {
    battleTitle();
    startCombat();
  } else alert("Return when you have obtained the courage to battle!!");
}
startGame();

function battleTitle() {
  var name = prompt("Enter your battle name!");
  return battleName = name;
}

function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

function attack() {
  grantHealth -= getDamage();
  userHealth -= getDamage();
}

function battleLog() {
  console.log(battleName + " now has " + userHealth + " health");
  console.log("Grant now has " + grantHealth + " health");
}

function battleTally() {
  if (grantHealth <= 0 ){
    wins++;
    grantHealth = 10;
    console.log(battleName + " won round " + wins);
  } else if (userHealth <= 0){
    playGame = false;
    console.log("You lose! Try again");
  }
}

function battleRound() {
  attack();
  battleLog();
  battleTally();
}

function battleOutput() {
  if (wins === 3) {
    console.log(battleName + " beat Grant 3 times, and won the game!");
    break;
  } else {
    alert("You have retreated!");
    console.log("You have retreated!");
    break;
  }
}

function startCombat() {
  while (playGame === true) {
    var battleAnswer = confirm("OK for attack, Cancel for retreat");
    if (battleAnswer === true) {

      if (wins === 3) {
        console.log(battleName + " beat Grant 3 times, and won the game!");
        break;
      } else {
        battleRound();
      }

    } else {
      alert("You have retreated!");
      console.log("You have retreated!");
      break;
    }
  }
}