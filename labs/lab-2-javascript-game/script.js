window.addEventListener("load", () => {
  // Global variables. Change these to alter the game.
  const initUserHP = 40;
  const initEnemyHP = 10;
  const winsNeeded = 5;
  const healCount = 2;

  class Character {
    constructor(name, health) {
      this.name = name;
      this.health = health;
      this.maxHealth = health;
      this.healsRemaining = healCount;
      this.winCount = 0;
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
      var healPercent = (100 * this.healsRemaining / healCount).toString() + "%"
      document.getElementById("heals").style.width = healPercent;
      document.getElementById("heals-text").innerText = this.healsRemaining + " / " + healCount;
    }

    wins(enemy, quit, disableButtons) {
      this.winCount = this.winCount + 1;
      var winPercent = (100 * this.winCount / winsNeeded).toString() + "%"
      document.getElementById("wins").style.width = winPercent;
      document.getElementById("wins-text").innerText = this.winCount + " / " + winsNeeded;
      if (this.health === 0) {
        this.loses(enemy, quit, disableButtons);
      } else if (this.winCount !== winsNeeded) {
        document.getElementById("battle-message").innerText = this.name + " beat " + enemy.name + "! You need to win " + (winsNeeded - this.winCount) + " more round(s).";
        enemy.health = initEnemyHP;
      } else {
        document.getElementById("battle-message").innerText = this.name + " has defeated " + enemy.name + "! Peace has been restored upon the land. \n(The game will restart automatically in 10 seconds.)";
        setTimeout(quit, 10000);
        disableButtons();
      }
    }

    loses(enemy, quit, disableButtons) {
      if (this.health === 0 && this.winCount === winsNeeded) {
        document.getElementById("battle-message").innerText = "The battle ended in a draw! (The game will restart automatically in 10 seconds.)";
        setTimeout(quit, 10000);
        disableButtons();
      } else {
        document.getElementById("battle-message").innerText = this.name + " has been defeated by " + enemy.name + "! All hope is lost. \n(The game will restart automatically in 10 seconds.)";
        setTimeout(quit, 10000);
        disableButtons();
      }
    }

    percentHealth() {
      return (100 * this.health / this.maxHealth);
    }

    percentHealthStr() { // Needed for health-bar width
      return this.percentHealth().toString() + "%";
    }

    percentHeals() {
      return (100 * this.healsRemaining / healCount);
    }

    percentWinStr() {
      return this.percentHeals().toString() + "%";
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

  // Start Button click
  document.getElementById("start").addEventListener("click", startGame);

  function startGame() {
    var name = document.getElementById("input").value;
    if (name === "") {
      name = "The Unknown Warrior";
    }
    var player = new Character(name, initUserHP);
    var grant = new Character("Grant the Mighty Chicken", initEnemyHP);
    document.getElementById("intro").style.display = "none";
    document.getElementById("battle").style.display = "flex";
    document.getElementById("page").style.display = "block";
    startCombat(player, grant);
  }

  // This function wraps around the rest of the code.
  function startCombat(player, enemy) {
    setDisplay();
    checkHealth();

    // Button clicks
    document.getElementById("attack").addEventListener("click", attack);
    document.getElementById("heal").addEventListener("click", heal);
    document.getElementById("quit").addEventListener("click", quit);

    function setDisplay() {
      document.getElementById("enemy-name").innerText = enemy.name;
      document.getElementById("player-name").innerText = player.name;
      document.getElementById("heals-text").innerText = player.healsRemaining + " / " + healCount;
      document.getElementById("wins-text").innerText = player.winCount + " / " + winsNeeded;
    }

    function attack() {
      player.health = Math.max(0, player.health - enemy.generateAttackDamage());
      enemy.health = Math.max(0, enemy.health - player.generateAttackDamage());
      var attackText = player.name + " and " + enemy.name + " swap attacks! " + player.name + " has " + player.health + " HP remaining. " + enemy.name + " has " + enemy.health + " HP remaining.";
      document.getElementById("battle-message").innerText = attackText;
      checkHealth();
      checkWin();
    }

    function heal() {
      if (player.healsRemaining === 0) {
        document.getElementById("battle-message").innerText = "You do not have any heals remaining.";
      } else if (player.health === player.maxHealth) {
        document.getElementById("battle-message").innerText = "You already have max health.";
      } else if (player.healsRemaining > 0) {
        player.heal();
        checkHealth();
      }
    }

    function quit() {
      location.reload(true);
    }

    function checkHealth() {
      document.getElementById("enemy-health-text").innerText = enemy.health.toString() + " / " + enemy.maxHealth.toString();
      document.getElementById("player-health-text").innerText = player.health.toString() + " / " + player.maxHealth.toString();
      document.getElementsByClassName("remaining-health-bar")[0].style.width = enemy.percentHealthStr();
      document.getElementsByClassName("remaining-health-bar")[1].style.width = player.percentHealthStr();
      document.getElementsByClassName("remaining-health-bar")[0].style.background = enemy.setHealthColor();
      document.getElementsByClassName("remaining-health-bar")[1].style.background = player.setHealthColor();
    }

    function checkWin() {
      if (enemy.health === 0) {
        player.wins(enemy, quit, disableButtons);
        setTimeout(checkHealth, 2000); // Refills enemy health bar on restore.
      } else if (player.health === 0) {
        player.loses(enemy, quit, disableButtons);
      }
    }

    // Used when game is over
    function disableButtons() {
      document.getElementById("attack").disabled = true;
      document.getElementById("heal").disabled = true;
    }
  }
})
