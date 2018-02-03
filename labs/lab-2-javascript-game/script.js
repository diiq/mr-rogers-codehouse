window.addEventListener("load", () => {
  class Character {
    constructor(name, health) {
      this.name = name;
      this.health = health;
      this.healsRemaining = healCount;
      this.winCount = 0;
    }

    generateAttackDamage() {
      const min = 1;
      const max = 3;
      return (Math.floor(Math.random() * (max - min + 1) + min));
      test();
    }

    heal() {
      const min = 1;
      const max = 10;
      this.health = this.health + (Math.floor(Math.random() * (max - min + 1) + min));
      this.healsRemaining = this.healsRemaining - 1;
    }

    wins(enemy) {
      this.winCount = this.winCount + 1;
      if (this.winCount !== winsNeeded) {
        console.log("You beat " + enemy.name + "! You need to win " + (winsNeeded - this.winCount) + " more round(s).");
        enemy.health = initEnemyHP;
      }
    }

    loses(enemy) {
      console.log(user.name + " was defeated by " + enemy.name);
    }
  }

  const initUserHP = 40;
  const initEnemyHP = 10;
  const winsNeeded = 5;
  const healCount = 2;

  document.getElementById("start").addEventListener("click", prepareForCombat);

  function test() {
    console.log("Testing");
  }

  function prepareForCombat() {
    var name = document.getElementById("input").value;
    const user = new Character(name, initUserHP);
    const grant = new Character("Grant the Mighty Chicken", initEnemyHP);
    document.getElementById("intro").style.display = "none";
    startCombat(user, grant);
  }

  function battleResults(user, quit) {
    if (quit === true) {
      console.log(user.name + " has quit the game.");
    } else if (user.health <= 0 && user.winCount === 3) {
      console.log("The game ends in a draw.");
    } else if (user.health <= 0) {
      console.log(user.name + " has lost the game.");
    } else if (user.winCount === 3) {
      console.log(user.name + " has defeated " + enemy.name + "!");
    }
  }

  function startCombat(user, enemy) { //using 'enemy' instead of 'grant' allows me to use other enemies
    var quit = false;
    var choice;

    document.getElementById("attack").addEventListener("click", attack);
    function attack() {
      user.health = user.health - enemy.generateAttackDamage();
      enemy.health = enemy.health - user.generateAttackDamage();
      checkHealth();
      console.log(user.health);
    }

    function checkHealth() {
      if (enemy.health <= 0) {
        user.wins(enemy);
        enemy.health = 10;
      }
    }
  }


})
