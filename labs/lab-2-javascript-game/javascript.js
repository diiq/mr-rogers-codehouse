var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var playGame = true;
var battleName = "";
var enemyName = "";
var z = 0;


window.addEventListener("load", () => {
  document.getElementById("initialize").addEventListener("click", startGame);

});


function yourName() {
  return document.getElementById("first-input").value;
}


class Player {
  constructor(name) {
    this.name = name;
    this.score = 40;
    this.heals = 2;
    this.wins = 0;
  }
  attackDamage() {
    this.score = this.score - getDamage();
  }
  heals() {
    this.score = this.score + getHealing();
  }
}


class Enemy {
	constructor(enemyName) {
		this.name = enemyName;
		this.score = 10;
	}
  attackDamage() {
    this.score = this.score - getDamage();
  }

}

function startGame() {
  var playGame = confirm("Shall we battle!");
  if (playGame === true) {
    const battleName = battleTitle();
	const enemyName = enemyTitle();
    const userPlayer = new Player(battleName);
	const enemyPlayer = new Enemy(enemyName);
    console.log(userPlayer);
	console.log(enemyPlayer);
  } else alert("Return when you have obtained the courage to battle!!");
}


function battleTitle() {
  return prompt("Enter your battle name!");
}

function enemyTitle() {
  return prompt("Who shall you battle!");
}

// function getDamage() {
  // return Math.floor(Math.random() * 5) + 1;
// }

getDamage = () => { return Math.floor(Math.random() * 3) + 1 };

getHealing = () => { return Math.floor(Math.random() * 10) + 1} ;

// function getHealing() {
	// return Math.floor(Math.random() *2) +1;
// }

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
