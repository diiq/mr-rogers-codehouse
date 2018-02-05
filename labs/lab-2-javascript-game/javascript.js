
window.addEventListener("load", () => {
  document.getElementById("initialize").addEventListener("click", startGame);
  document.getElementById("attack").addEventListener("click", attack);
  document.getElementById("heal").addEventListener("click", heal);
  document.getElementById("retreat").addEventListener("click", retreat);
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
  }
  healing() {
    this.score = this.score + getHealing();

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
  enemyResults();
  userResults();
  hideBattle();
}


function userResults(){
  document.getElementById("player-health").style.width = (playerHealthRemain()).toString() + "%";
  document.getElementById("heal-count").style.width = (userHealsRemain()).toString() + "%";
  document.getElementById("first-input").value;
  document.getElementById("player-name").innerText = user.name + " has " + user.score + " health";
}

function enemyResults(){
  document.getElementById("enemy-health").style.width = (enemyHealthRemain()).toString() + "%";
  document.getElementById("second-input").value;
  document.getElementById("enemy-name").innerText = enemy.name + " has " + enemy.score + " health";
}

function attack() {
  user.attackDamage();
  enemy.attackDamage();
  battleTally();
  enemyResults();
  userResults();
}

function heal() {
  if (user.heals > 0) {
    user.healing();
    user.heals = user.heals - 1;
    document.getElementById("heal-count").style.width = (userHealsRemain()).toString() + "%";
  }
}

function playerHealthRemain() {
  return (user.score/40)/.01;
}

function enemyHealthRemain() {
  return (enemy.score/10)/.01;
}

function userHealsRemain() {
  return (user.heals/2)/.01;
}

function userWins() {
  return (user.wins/5)/.01;
}

function retreat() {
  document.getElementById("main").style.display = "none";
  document.getElementById("end-game").style.display = "block";
}

function userWon() {
  document.getElementById("main").style.display = "none";
  document.getElementById("user-won").style.display = "block";
}

function enemyWon() {
  document.getElementById("main").style.display = "none";
  document.getElementById("enemy-won").style.display = "block";
}

function hideBattle() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("main-game").style.display = "block";
}

getDamage = () => { return Math.floor(Math.random() * 3) + 1 };

getHealing = () => { return Math.floor(Math.random() * 10) + 1} ;


function battleTally() {

  if (enemy.score <= 0 && user.wins < 5) {
    user.wins++;
    enemy.score = 10;
    console.log("User wins " + user.wins);
    console.log(enemy.score);
    document.getElementById("player-wins").style.width = (userWins()).toString() + "%";
    console.log(user.wins);
  } else if (user.score <= 0) {
    console.log("You lose! Try again");
    enemyWon();
  } else if (user.wins >= 5){
    userWon();
  }
}
