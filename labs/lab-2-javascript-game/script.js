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
    var percentEnemyHealth;
    var percentPlayerHealth;

    function calcPlayerPercentHealth() {
      return 100 * (user.health / initUserHP);
    }

    function calcEnemyPercentHealth() {
      return 100 * (enemy.health / initEnemyHP);
    }

    //attack button click
    document.getElementById("attack").addEventListener("click", attack);
    document.getElementById("heal").addEventListener("click", attack);
    document.getElementById("quit").addEventListener("click", attack);

    function attack() {
      user.health = user.health - enemy.generateAttackDamage();
      enemy.health = enemy.health - user.generateAttackDamage();
      checkHealth();
    }

    function checkHealth() {
      percentEnemyHealth = (calcEnemyPercentHealth()).toString() + "%";
      percentPlayerHealth = (calcPlayerPercentHealth()).toString() + "%";
      document.getElementsByClassName("remaining-health")[0].style.width = percentEnemyHealth;
      document.getElementsByClassName("remaining-health")[1].style.width = percentPlayerHealth;

      // Changes the color of the health bar depending on percent.
      if (calcEnemyPercentHealth() > 59) {
        document.getElementsByClassName("remaining-health")[0].style.backgroundColor = "rgb(61, 242, 57)";
      } else if (calcEnemyPercentHealth() > 29) {
        document.getElementsByClassName("remaining-health")[0].style.backgroundColor = "rgb(255, 228, 84)";
      } else {
        document.getElementsByClassName("remaining-health")[0].style.backgroundColor = "rgb(254, 42, 42)";
      }
      if (calcPlayerPercentHealth() > 59) {
        document.getElementsByClassName("remaining-health")[1].style.backgroundColor = "rgb(61, 242, 57)";
      } else if (calcPlayerPercentHealth() > 29) {
        document.getElementsByClassName("remaining-health")[1].style.backgroundColor = "rgb(255, 228, 84)";
      } else {
        document.getElementsByClassName("remaining-health")[1].style.backgroundColor = "rgb(254, 42, 42)";
      }
    }
  }


})
