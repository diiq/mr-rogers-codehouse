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
  console.log("BUTTON PRESSED!!!"); // REMOVE LATER
  user = new Character("Bree", 40, 2, 0); // Have user be able to enter this
  enemy = new Character("The Almighty Grant", 10);
  document.getElementById("attack-button").addEventListener("click", startCombat);
  document.getElementById("heal-button").addEventListener("click", userHeal);
  document.getElementById("quit-button").addEventListener("click", quitGame); // ADD quitGame Function
}

function startCombat() {
  console.log("Combat Started"); // REMOVE LATER
  user.health = user.health - enemy.generateAttackDamage();
  enemy.health = enemy.health - user.generateAttackDamage();
  console.log("Grant Health = " + enemy.health, "User Health = " + user.health);
  percentHealthRemaining();
  console.log(userHealthPercent);
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
  if ((enemy.health <= 0) && (user.winCount < 5)) {
    user.winCount = user.winCount + 1;
    document.getElementById("user-win-count").innerText = user.winCount + "/5";
    console.log("You have won this round! " + "You need to win " + (5 - user.winCount) + " more battles."); // REMOVE LATER
    enemy.health = 10;
  } else if ((user.winCount === 5) || (user.health <= 0)) {
    gameEnd();
  }
}

function userHeal() {
  if (user.healsRemaining > 0) {
    console.log("User Healed"); // REMOVE LATER
    user.healsRemaining = user.healsRemaining - 1;
    user.health = user.health + user.heal();
    console.log("Heals Remaining " + user.healsRemaining); // REMOVE LATER
    document.getElementById("user-heals-remaining").innerText = user.healsRemaining + "/2";
    percentHealthRemaining();
    document.getElementById("user-health-bar").style.width = userHealthPercent;
    document.getElementById("user-health-number").innerText = user.health + "/40";

  } else {
    console.log("User has no heals Reamaining"); // REMOVE LATER
  }
}

function gameEnd() {
  if (user.health <= 0) {
    console.log("The Grant has defeated you.");
  } else if (user.winCount === 5) {
    console.log("You have defeated the almighty Grant.")
  }
}

function quitGame() {
  document.getElementById("start-container").style.display = 'block';
  document.getElementById("game-console").style.display = 'none';
}
  // Not sure why I would need to make all three buttons call the same function.........

  // function startCombat(user, enemy) {
  //
  //   if () {
  //
  //   }
  //
  //   console.log("Combat Started"); // REMOVE LATER
  //     user.health = user.health - generateAttackDamage();
  //     enemy.health = enemy.health - generateAttackDamage();
  //     console.log(enemy.health, user.health);
  //   }
  // }

  //    startCombat);
  //   console.log("BUTTON PRESS!")
  // }

  // ___________________________________________________

  // function startCombat() {
  //   while ((winCount < 3) && (grantHP > 0) && (playerHP > 0)) {
  //     var attackChoice = prompt("Would you like to \"attack\" or \"quit\"?");
  //     if (attackChoice === "attack") {
  //       grantHP = grantHP - getDamage();
  //       playerHP = playerHP - getDamage();
  //       console.log("The Almighty Grant has " + grantHP + " health left.");
  //       console.log(playerName + " has " + playerHP + " health left.");
  //       if (grantHP <= 0) {
  //         winCount = winCount + 1;
  //         grantHP = 10;
  //         console.log("You have beat the Grant!" + " You need to win " + (3 - winCount) + " more round(s).");
  //       }
  //     } else if (attackChoice === "quit") {
  //       console.log(playerName + " has quit the game. " + "Remaining Health Points: " + playerHP + ", Total Wins: " + winCount);
  //       break;
  //     }
  //   }
  // }


  // REFERENCE ______________________________

  // class Car {
  //   constructor(make, model, topSpeed) {
  //   this.make = make;
  //   this.model = model;
  //   this.topSpeed = topSpeed;
  //   this.currentSpeed = 0;
  //   }
  // }
  //
  // var sprite = new Car("Austin Healey", "Sprite", 85);
