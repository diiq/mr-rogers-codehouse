class Character {
  constructor(name, health, healsRemaining, wins) {
    this.name = name;
    this.health = health;
    this.healsRemaining = healsRemaining;
    this.wins = wins;
  }
  generateAttackeDamage() {
    this.health = this.health - getDamage();
}

var grant = new Character("Grant", 40, 0, 0);
var user = new Character(userName, 40, 2, 0); //How to get it to recognize userName as response to prompt?

function getDamage() {
  const min = 1;
  const max = 3;
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

function getHeal() {
  if (healsRemaining > 0) {
    const min = 1;
    const max = 10;
    return (Math.floor(Math.random() * (max - min + 1) + min));
  } else {
    document.getElementById("player-heal-count").innerText = "You have no remaing heals."
  }
}


function startGame() {
  var userName = prompt("What is your name, Warrior?");
  document.getElementById("game-container").style.display = "flex";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("player-name").innerText = userName;
}


function chooseWinner(grantNumberWins, userNumberWins) {
  if (userNumberWins >= 3) {
    console.log("You have won!");
  } else if (grantNumberWins >= 3) {
    console.log("Grant has won!");
  }
}

function startCombat(userName) {
  var grantPoints = 10;
  var userPoints = 40;
  var grantNumberWins = 0;
  var userNumberWins = 0;
  while (userNumberWins < 3 && grantNumberWins < 3) {
    while (grantPoints > 0 && userPoints > 0) {
      grantPoints = grantPoints - getDamage();
      userPoints = userPoints - getDamage();
      console.log("Grant has " + grantPoints + " health left." );
      console.log(userName + " has " + userPoints + " health left." );
      var attack = confirm("Would you like to attack again?");
    } if (grantPoints <= 0) {
      userNumberWins++;
      grantPoints = 10;
    }
    if (userPoints <= 0) {
        grantNumberWins++;
      }
    }
    chooseWinner(grantNumberWins, userNumberWins);
  }
