class CharacterCreate {
  constructor(name, health, healsRemaining) {
    this.name = name;
    this.health = health;
    this.healsRemaining = healsRemaining;
  }
  generateAttackDamage() {
    return Math.floor(Math.random() * 5) + 1;
  }

  heal() {
    if (this.healsRemaining > 0){
      this.healsRemaining--;
      return Math.floor(Math.random() * 10) + 1;
    } else {
      document.getElementById("playerStatusText").innerText = "You have no heals left";
    }
  }
}

const intPlayerHealth = 40;
const intEnemyHealth = 10;
const intHealsRemaining = 2;
var winCount = 0;
var roundCount = 1;
var player;
var enemy;


function loadGame() {
  var playerName = document.getElementById("playerNameInput").value
  player = new CharacterCreate(playerName, intPlayerHealth, intHealsRemaining);
  enemy = new CharacterCreate("Grant", intEnemyHealth, 0);
  document.getElementById("mainContainer").style.display = "flex";
  document.getElementById("startContainer").style.display = "none";
  document.getElementById("playerName").innerText = player.name;
  document.getElementById("playerNameInputContainer").style.display = "none";
}

function quitGame(){
  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("startContainer").style.display = "flex";
  document.getElementById("playerStatusText").innerText = "";
  document.getElementById("enemyStatusText").innerText = "";
  gameReset();
}

function gameReset(){
  document.getElementById("playerHealthText").innerText = "40/40";
  document.getElementById("playerHealthBar").style.width = "100%";
  document.getElementById("enemyHealthText").innerText = "10/10";
  document.getElementById("enemyHealthBar").style.width = "100%";
  document.getElementById("enemyHealthBar").style.backgroundColor = "green";
  document.getElementById("playerHealthBar").style.backgroundColor = "green";
  playerHealth = 40;
  enemyHealth = 10;
  healsRemaining = 2;
  winCount = 0;
  roundCount = 1;
}

function roundReset(){
  document.getElementById("playerStatusText").innerText = "";
  document.getElementById("enemyStatusText").innerText = "";
  enemy.health = intEnemyHealth;
  calPlayerHealth();
  calEnemyHealth();


}

function checkWin() {
  if (winCount === 3) {
    quitGame();
    alert("You Won!")
  } else if (player.health <= 0) {
    quitGame();
    alert("You lost!")
  } else if (enemy.health === 0 && winCount < 3){
    winCount++;
    roundCount++;
    roundReset();
    return
  }
}

function attack() {
  var playerHealthPrevious = player.health;
  var enemyHealthPrevious = enemy.health;
  enemy.health = enemy.health - player.generateAttackDamage();
  document.getElementById("playerStatusText").innerText =  "You dealt " + (enemyHealthPrevious - enemy.health) + " damage to " + enemy.name + ".";
  calEnemyHealth();
  player.health = player.health - enemy.generateAttackDamage();
  document.getElementById("enemyStatusText").innerText =  enemy.name + " dealt " + (playerHealthPrevious - player.health) + " damage to " + player.name + ".";
  calPlayerHealth();
  checkWin();
}

function heal() {
  if (player.healsRemaining > 0 && player.health !== 40){
    var playerHealthPrevious = player.health;
    player.health = player.health + player.heal();
    document.getElementById("playerStatusText").innerText = "You healed "+ (player.health - playerHealthPrevious) + " health.";
    player.healsRemaining--;
    calPlayerHealth();
    playerHealthPrevious = player.health;
    player.health = player.health - enemy.generateAttackDamage();
    document.getElementById("enemyStatusText").innerText =  enemy.name + " dealt " + (playerHealthPrevious - player.health) + " damage to " + player.name + ".";
    calPlayerHealth();
    checkWin();
  } else if (player.health === 40) {
    document.getElementById("statusMessage").innerText = "Your health is full."
    return
  } else if (player.healsRemaining === 0) {
    document.getElementById("statusMessage").innerText = "You have no heals left."
    return
  }
}

function calPlayerHealth() {
  if (player.health < 0) {
    player.health = 0;
  }
  var playerHealthPercentage = (player.health / 40) * 100;
  document.getElementById("playerHealthText").innerText = player.health+"/40";
  document.getElementById("playerHealthBar").style.width = playerHealthPercentage+"%";
  if (playerHealthPercentage > 75){
    document.getElementById("playerHealthBar").style.backgroundColor = "green";
  } else if (playerHealthPercentage < 75 && playerHealthPercentage > 40) {
    document.getElementById("playerHealthBar").style.backgroundColor = "yellow";
  } else if (playerHealthPercentage < 40) {
    document.getElementById("playerHealthBar").style.backgroundColor = "red";
  }
}

function calEnemyHealth() {

  if (enemy.health < 0) {
    enemy.health = 0;
  }
  var enemyHealthPercentage = (enemy.health / 10) * 100;
  document.getElementById("enemyHealthText").innerText = enemy.health+"/10";
  document.getElementById("enemyHealthBar").style.width = enemyHealthPercentage+"%";
  if (enemyHealthPercentage > 75){
    document.getElementById("enemyHealthBar").style.backgroundColor = "green";
  } else if (enemyHealthPercentage < 75 && enemyHealthPercentage > 40) {
    document.getElementById("enemyHealthBar").style.backgroundColor = "yellow";
  } else if (enemyHealthPercentage < 40) {
    document.getElementById("enemyHealthBar").style.backgroundColor = "red";
  }
}

window.addEventListener("load", () => {
  document.getElementById("start").addEventListener("click", loadGame);
  document.getElementById("attack").addEventListener("click", attack);
  document.getElementById("heal").addEventListener("click", heal);
  document.getElementById("quit").addEventListener("click", quitGame);
})
