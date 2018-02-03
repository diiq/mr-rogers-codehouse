// debugger;

var enemy;
var user;

window.addEventListener("load", () => {
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
  console.log("BUTTON PRESSED!!!"); // REMOVE LATER
  user = new Character("Bree", 40, 2, 0);
  enemy = new Character("The Almighty Grant", 10);
  document.getElementById("attack-button").addEventListener("click", startCombat);
  document.getElementById("heal-button").addEventListener("click", userHeal);
}

function startCombat() {
  console.log("Combat Started"); // REMOVE LATER
  user.health = user.health - enemy.generateAttackDamage();
  enemy.health = enemy.health - user.generateAttackDamage();
  console.log(enemy.health, user.health);
}

function userHeal() {
  console.log("Combat Started"); // REMOVE LATER
  user.healsRemaining = user.healsRemaining - 1;
  console.log(user.healsRemaining); // REMOVE LATER
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
