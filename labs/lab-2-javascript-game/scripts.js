class Character {
  constructor(name, health, healsRemaining, wins) {
    this.name = name;
    this.health = health;
    this.healsRemaining = healsRemaining;
    this.wins = wins;
  }
}

var grant = new Character("Grant", 40, 2, 0);
var user = new Character(userName, 40, 2, 0);

function generateAttackDamage() {
  const min = 1;
  const max = 3;
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

function heal() {
  const min = 1;
  const max = 10;
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

function startGame() {
  var start = prompt("Would you like to play a game against the Almighty Grant?").toLowerCase();
  if (start === "yes") {
    var userName = prompt("What is your name, Warrior?");
    startCombat(userName);
  }
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
