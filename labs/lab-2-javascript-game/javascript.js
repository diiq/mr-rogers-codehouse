
window.addEventListener("load", () => {
  document.getElementById("initialize").addEventListener("click", startGame);
  document.getElementById("attack").addEventListener("click", attack);
  document.getElementById("heal").addEventListener("click", heal);
});

class Player {
  constructor(name, health) {
    this.name = name;
    this.score = health;
    this.heals = 2;
    this.wins = 0;
  }
  attackDamage() {
    this.score = this.score - getDamage();
    console.log(this.score);
  }
  healing() {
    this.score = this.score + getHealing();
    console.log(this.heals);
  }
}
var enemy;
var user;

function startGame() {
  var name = document.getElementById("first-input").value;
  var enemyName = document.getElementById("second-input").value;
  user = new Player(name, 40);
  enemy = new Player(enemyName, 10);
  console.log(user);
  console.log(enemy);
}


function userResults(){
  document.getElementById("first-input").value;
  document.getElementById("player-name").innerText = user.name + " has " + user.score + " health";
}

function enemyResults(){
  document.getElementById("second-input").value;
  document.getElementById("enemy-name").innerText = enemy.name + " has " + enemy.score + " health";
}

function attack() {
  user.attackDamage();
  enemy.attackDamage();
  enemyResults();
  userResults();
}

function heal() {
  user.healing();
}

getDamage = () => { return Math.floor(Math.random() * 3) + 1 };

getHealing = () => { return Math.floor(Math.random() * 10) + 1} ;

function lifeRemaining() {
  console.log(enemy.score);
}


function startCombat() {
  if (playGame === true) {


  } else alert("Return when you have obtained the courage to battle!!");
}


function battleTitle() {
  return document.getElementById("first-input").value;
}

function enemyTitle() {
  return document.getElementById("second-input").value;
}




function battleLog() {
  console.log(battleName + " now has " + userHealth + " health");
  console.log("Grant now has " + grantHealth + " health");
}

function battleTally() {
  if (grantHealth <= 0 ){
    wins++;
    grantHealth = enemyHealth;
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
