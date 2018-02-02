function startGame() {
  const play = window.prompt("Do you want to play?");
  if (play === "yes") {
    var name = window.prompt("Enter your name:")
    startCombat(name);
  }
}

class Character {
    constructor (name, health) {
      this.name = name;
      this.health = health;
      this.healsRemaining = 2;
      this.wins = 0;
    }

    generateAttackDamage() {
      const min = 1;
      const max = 3;
      return (Math.floor(Math.random() * (max - min + 1) + min));
    }

    heal() {
      const min = 1;
      const max = 10;
      this.health = this.health + (Math.floor(Math.random() * (max - min + 1) + min));
      this.healsRemaining = this.healsRemaining - 1;
    }
}

const user = new Character(name, 40);
const grant = new Character("Grant the Mighty Chicken", 10);

function battleResults(user, quit) {
  if (quit === true) {
    console.log(user.name + " has quit the game.");
  } else if (user.health <= 0 && user.wins === 3) {
    console.log("The game ends in a draw.");
  } else if (user.health <= 0) {
    console.log(user.name + " has lost the game.");
  } else if (user.wins === 3) {
    console.log(user.name + " has defeated Grant the Mighty Chicken!");
  }
}

function winRound(user) {
  if (user.wins !== 3) { // Note: Does not show if game has finished.
    console.log("You beat Grant! You need to win " + (3 - user.wins) + " more round(s).");
  }
}

function startCombat(name) {
  var quit = false;
  var choice;

  while ((winCount < 3) && (userHP > 0) && (quit === false)) {
    choice = window.prompt("Would you like to attack or quit?");
    if (choice === "attack") {
      userHP = userHP - getDamage();
      grantHP = grantHP - getDamage();
      console.log(name + " has " + userHP + " health left.");
      console.log("Grant the Mighty Chicken has " + grantHP + " health left.");
    } else if (choice === "quit") {
      quit = true;
    }
    if (grantHP <= 0) {
      winCount = winCount + 1;
      winRound(winCount);
      grantHP = 10;
    }
  }
  battleResults(name, userHP, winCount, quit);
}
