var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var playGame = true;
var battleName = "";

class Player {
  constructor(name) {
    this.name = name;
    this.score = 40;
    this.heals = 2;
    this.wins = 0;
  }
  generateAttackeDamage() {
    this.score = this.score - getDamage();
  }
}


function startGame() {
  var playGame = confirm("Shall we battle!");
  if (playGame === true) {
    const battleName = battleTitle();
    const userPlayer = new Player(battleName);
    console.log(userPlayer);
  } else alert("Return when you have obtained the courage to battle!!");
}
startGame();

function battleTitle() {
  return prompt("Enter your battle name!");
}

function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

function attack(battleAnswer) {
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

function startCombat() {
  while (playGame === true) {
    var battleAnswer = confirm("OK for attack, Cancel for retreat");
    if (battleAnswer === true) {
      if (wins === 3) {
        console.log(battleName + " beat Grant 3 times, and won the game!");
        break;
      } else
      attack(battleAnswer);
      battleLog();
      battleTally();
    } else {
      alert("Coward! Grant has destroyed you!");
      console.log("Coward! Grant has destroyed you!");
      break;
    }
  }
}
