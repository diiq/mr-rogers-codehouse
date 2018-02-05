window.addEventListener("load", () => {
  class Character {
    constructor(name, health) {
      this.name = name;
      this.health = health;
      this.maxHealth = health;
      this.healsRemaining = healCount;
      this.winCount = 0;
      this.message;
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
      this.health = Math.min(this.health, this.maxHealth);
      this.healsRemaining = this.healsRemaining - 1;
    }

    wins(enemy, quit, disableButtons) {
      this.winCount = this.winCount + 1;
      if (this.winCount !== winsNeeded) {
        this.message = this.name + " beat " + enemy.name + "! You need to win " + (winsNeeded - this.winCount) + " more round(s)."
        document.getElementById("battle-message").innerText = this.message;
        enemy.health = initEnemyHP;
      } else {
        this.message = this.name + " has defeated " + enemy.name + "! Peace has been restored upon the land. (The game will restart automatically in 10 seconds.)"
        document.getElementById("battle-message").innerText = this.message;
        setTimeout(quit, 10000);
        disableButtons();
      }
    }

    loses(enemy) {
      this.message = this.name + " beat " + enemy.name + "! You need to win " + (winsNeeded - this.winCount) + " more round(s)."
      document.getElementById("battle-message").innerText = this.message;
    }

    percentHealth() {
      return (100 * this.health / this.maxHealth);
    }

    percentHealthStr() { // Needed for health-bar width
      return this.percentHealth().toString() + "%";
    }

    setHealthColor() {
      if (this.percentHealth() > 69) {
        return "rgb(61, 242, 57)";
      } else if ((100 * this.health / this.maxHealth) > 39) {
        return "rgb(255, 228, 84)";
      } else if ((100 * this.health / this.maxHealth) > 0) {
        return "rgb(254, 42, 42)";
      }
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
    if (name === "") {
      name = "The Unknown Warrior";
    }
    var user = new Character(name, initUserHP);
    var grant = new Character("Grant the Mighty Chicken", initEnemyHP);
    document.getElementById("intro").style.display = "none";
    document.getElementById("battle").style.display = "flex";
    startCombat(user, grant);
  }

  function startCombat(user, enemy) { //using 'enemy' instead of 'grant' allows me to use other enemies
    checkHealth();

    // Button clicks
    document.getElementById("attack").addEventListener("click", attack);
    document.getElementById("heal").addEventListener("click", heal);
    document.getElementById("quit").addEventListener("click", quit);

    function attack() {
      user.health = Math.max(0, user.health - enemy.generateAttackDamage());
      enemy.health = Math.max(0, enemy.health - user.generateAttackDamage());
      var attackText = user.name + " and " + enemy.name + " swap attacks! " + user.name + "  " + user.health + " HP remaining. " + enemy.name + " has " + enemy.health + " HP remaining.";
      document.getElementById("battle-message").innerText = attackText;
      checkHealth();
      checkWin();
    }

    function heal() {

      if (user.healsRemaining === 0) {
        document.getElementById("battle-message").innerText = "You do not have any heals remaining.";
      } else if (user.health === user.maxHealth) {
        document.getElementById("battle-message").innerText = "You already have max health.";
      } else if (user.healsRemaining > 0) {
        user.heal();
        checkHealth();
      }
    }

    function quit() {
      location.reload(true);
    }

    function checkWin() {
      if (user.health === 0 && user.winCount === winsNeeded) {
        document.getElementById("battle-message").innerText = "The battle ended in a draw! (The game will restart automatically in 10 seconds.)";
        setTimeout(quit, 10000);
        disableButtons();
      } else if (user.health === 0) {
        user.loses(enemy);
        document.getElementById("battle-message").innerText = user.name + " has been defeated by " + enemy.name + "! All hope is lost. (The game will restart automatically in 10 seconds.)";
        setTimeout(quit, 10000);
        disableButtons();
      } else if (enemy.health === 0) {
        user.wins(enemy, quit, disableButtons);
        setTimeout(checkHealth, 2000);
      }
    }

    function checkHealth() {
      var enemyPercentHealth = enemy.percentHealthStr();
      var playerPercentHealth = user.percentHealthStr();
      var enemyHealthColor = enemy.setHealthColor();
      var playerHealthColor = user.setHealthColor();
      var enemyHealthString = enemy.health.toString() + " / " + enemy.maxHealth.toString();
      var playerHealthString = user.health.toString() + " / " + user.maxHealth.toString();
      document.getElementById("enemy-data").innerText = enemyHealthString;
      document.getElementById("player-data").innerText = playerHealthString;
      document.getElementsByClassName("remaining-health")[0].style.width = enemyPercentHealth;
      document.getElementsByClassName("remaining-health")[1].style.width = playerPercentHealth;
      document.getElementsByClassName("remaining-health")[0].style.background = enemyHealthColor;
      document.getElementsByClassName("remaining-health")[1].style.background = playerHealthColor;
    }

    function disableButtons() {
      document.getElementById("attack").disabled = true;
      document.getElementById("heal").disabled = true;
    }
  }
})
