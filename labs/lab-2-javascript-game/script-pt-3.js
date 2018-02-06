// debugger;

var enemy;
var user;
var userHealthPercent;
var enemyHealthPercent;

window.addEventListener("load", () => {
  document.getElementById("game-console").style.display = 'none';
  document.getElementById("start-button").addEventListener("click", startGame);
});

class Character {
  constructor(name, health, healsRemaining, winCount) {
    this.name = name;
    this.health = health;
    this.healsRemaining = healsRemaining;
    this.winCount = winCount;
  }

  generateAttackDamage() { // do min and max parameters / arguments
    const min = 1;
    const max = 3;
    return (Math.floor(Math.random() * (max - min + 1) + min));
  }

  heal() {
    const min = 1;
    const max = 10;
    return (Math.floor(Math.random() * (max - min + 1) + min));
  }
}

function startGame() {
  document.getElementById("game-console").style.display = 'block';
  document.getElementById("start-container").style.display = 'none';
  user = new Character("Bree", 40, 2, 0); // Have user be able to enter this
  enemy = new Character("The Almighty Grant", 10);
  document.getElementById("attack-button").addEventListener("click", startCombat);
  document.getElementById("heal-button").addEventListener("click", userHeal);
  document.getElementById("quit-button").addEventListener("click", quitGame);
}

function startCombat() {
  user.health = user.health - enemy.generateAttackDamage();
  enemy.health = enemy.health - user.generateAttackDamage();
  percentHealthRemaining();
  document.getElementById("user-health-bar").style.width = userHealthPercent;
  document.getElementById("enemy-health-bar").style.width = enemyHealthPercent;
  document.getElementById("user-health-number").innerText = user.health + "/40";
  document.getElementById("enemy-health-number").innerText = enemy.health + "/10";
  checkWins();
}

function percentHealthRemaining() {
  userHealthPercent = ((user.health / 40) * 100) + "%";
  enemyHealthPercent = ((enemy.health / 10) * 100) + "%";
  return userHealthPercent;
  return enemyHealthPercent;
}

function checkWins() {
  if ((enemy.health <= 0) && (user.winCount < 5) && (user.health > 0)) {
    user.winCount = user.winCount + 1;
    document.getElementById("user-win-count").innerText = user.winCount + "/5";
    // console.log("You have won this round! " + "You need to win " + (5 - user.winCount) + " more battles."); // Put this diplayed somewhere in window
    enemy.health = 10;
  } else if ((user.winCount === 5) && (user.health <= 0)) {
    gameEnd();
  }
}

function userHeal() {
  if (user.healsRemaining > 0) {
    user.healsRemaining = user.healsRemaining - 1;
    user.health = user.health + user.heal();
    document.getElementById("user-heals-remaining").innerText = user.healsRemaining + "/2";
    percentHealthRemaining();
    document.getElementById("user-health-bar").style.width = userHealthPercent;
    document.getElementById("user-health-number").innerText = user.health + "/40";
  } else {
    console.log("User has no heals Reamaining"); // Have displayed in widow eventually
  }
}

function gameEnd() {
  if (user.health <= 0) {
    console.log("The Grant has defeated you."); // Have displayed in widow eventually
    startGame();
  } else if (user.winCount === 5) {
    console.log("You have defeated the almighty Grant."); // Have displayed in widow eventually
    startGame();
  }
}

function quitGame() {
  document.getElementById("start-container").style.display = 'block';
  document.getElementById("game-console").style.display = 'none';
}
