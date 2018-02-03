var playerHealth = 40;
var enemyHealth = 10;
var winCount = 0;
var healsRemaining = 2;
var enemyName = "Grant";
var playerName = "";
var roundCount = 1;

class characterCreate {
  constructor(playerName) {
    this.name = playerName;
    this.playerHealth = 40;
    this.healsRemaining = 2;
  }
}

function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

function getHeal() {
  if (healsRemaining > 0){
    return Math.floor(Math.random() * 10) + 1;
  } else {
    document.getElementById("statusText").innerText = "You have no heals left"
  }
}

function loadGame() {
  playerName = document.getElementById("playerNameInput").value
  const player = new characterCreate(playerName);
  document.getElementById("mainContainer").style.display = "flex";
  document.getElementById("startContainer").style.display = "none";
  document.getElementById("playerName").innerText = playerName;
}

function quitGame(){
  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("startContainer").style.display = "flex";
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
  enemyHealth = 10;
  calPlayerHealth();
  calEnemyHealth();

}

function checkWin() {
  if (winCount === 3) {
    quitGame();
    alert("You Won!")
  } else if (playerHealth <= 0) {
    quitGame();
    alert("You lost!")
  } else if (enemyHealth === 0 && winCount < 3){
    winCount++;
    roundCount++;
    roundReset();
    checkWin();
    return
  }
}

function attack() {
  var playerHealthPrevious = playerHealth;
  var enemyHealthPrevious = enemyHealth;
  enemyHealth = enemyHealth - getDamage();
  document.getElementById("playerStatusText").innerText =  "You dealt " + (enemyHealthPrevious - enemyHealth) + " damage to " + enemyName + ".";
  calEnemyHealth();
  playerHealth = playerHealth - getDamage();
  document.getElementById("enemyStatusText").innerText =  enemyName + " dealt " + (playerHealthPrevious - playerHealth) + " damage to " + playerName + ".";
  calPlayerHealth();
  checkWin();
}

function heal() {
  if (healsRemaining > 0 && playerHealth !== 40){
    var playerHealthPrevious = playerHealth;
    playerHealth = playerHealth + getHeal();
    document.getElementById("playerStatusText").innerText = "You healed "+ (playerHealth - playerHealthPrevious) + " health.";
    healsRemaining--;
    calPlayerHealth();
    playerHealthPrevious = playerHealth;
    playerHealth = playerHealth - getDamage();
    document.getElementById("enemyStatusText").innerText =  enemyName + " dealt " + (playerHealthPrevious - playerHealth) + " damage to " + playerName + ".";
    calPlayerHealth();
    checkWin();
  } else if (playerHealth === 40) {
    document.getElementById("statusMessage").innerText = "Your health is full."
    return
  } else if (healsRemaining === 0) {
    document.getElementById("statusMessage").innerText = "You have no heals left."
    return
  }
}

function calPlayerHealth() {
  if (playerHealth < 0) {
    playerHealth = 0;
  }
  var playerHealthPercentage = (playerHealth / 40) * 100;
  document.getElementById("playerHealthText").innerText = playerHealth+"/40";
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

  if (enemyHealth < 0) {
    enemyHealth = 0;
  }
  var enemyHealthPercentage = (enemyHealth / 10) * 100;
  document.getElementById("enemyHealthText").innerText = enemyHealth+"/10";
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
