class Character {
  constructor(name, health, healsRemaining, winCount) {
  this.name = name;
  this.health = health;
  this.healsRemaining = healsRemaining;
  this.winCount = winCount;
  }

  generateAttackDamage() {  // do min and max parameters / arguments
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

var user = new Character("Bree", 40, 2, 0);
var enemy = new Character("The Almighty Grant", 10);

window.addEventListener("load", () => {
    document.getElementById("start-button").addEventListener("click", startCombat);
})

function startCombat() {
  console.log("BUTTON PRESSED!!!");
}

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
