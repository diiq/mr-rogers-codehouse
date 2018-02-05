window.addEventListener("load", () => {
  class Character {
    constructor(name, health, healsRemaining, wins) {
      this.name = name;
      this.health = health;
      this.healsRemaining = healCount;
      this.wins = wins;
    }
    getDamage() {
      const min = 1;
      const max = 3;
      return(Math.floor(Math.random() * (max - min + 1) + min));
    }
    getHeal() {
        const min = 1;
        const max = 10;
        return (Math.floor(Math.random() * (max - min + 1) + min));
    }
  }

  const playerHP = 40;
  const enemyHP = 10;
  const maxPoints = 40;
  const healCount = 2;
  const wins = 0;

  var grant;
  var user;

  function hideStart() {
    document.getElementById("start-button").style.display="none";
    document.getElementById("game-container").style.display="block";
    document.getElementById("input").style.display="none";
  }

  document.getElementById("start-button").addEventListener("click", startCombat);

  function startCombat() {
    hideStart();
    userName();

    grant = new Character("Grant", enemyHP);
    user = new Character(userName(), playerHP, healCount, wins);

    document.getElementById("player-name").innerText=userName();
    document.getElementById("attack-button").addEventListener("click", attack);
    document.getElementById("heal-button").addEventListener("click", heal);
    document.getElementById("quit-button").addEventListener("click", quitGame);
    console.log("hello", user.health, grant.health, user.healCount);

    function userName() {
      return document.getElementById("first-input").value;
    }

    function attack() {
      user.health = user.health - grant.getDamage();
      grant.health = grant.health - user.getDamage();
      console.log("hello", user.health, grant.health, user.healsRemaining, user.wins);
      updateHealth();
      checkWin();
    }

    function heal() {
      user.health = user.health + grant.getHeal();
      if (user.healsRemaining > 0) {
        user.healsRemaining = user.healsRemaining - 1;
      } else {
        document.getElementById("player-update-note").innerText = "You have no heals left.";
      }
      updateHealth();
      console.log("hello", user.health, grant.health, user.healsRemaining, user.wins);
    }
    newRound();
    updateHealth();
    updateHeals();
  }

  function playerHealthPercentage() {
    return 100 * (user.health / user.playerHP);
  }

  function grantHealthPercentage() {
    return 100 * (grant.health / grant.enemyHP);
  }

  function updateHealth() {
    var percentEnemyHealth = (grantHealthPercentage()).toString() + "%";
    var percentPlayerHealth = (playerHealthPercentage()).toString() + "%";
    document.getElementById("player-health-remaining").style.width=percentPlayerHealth;
    document.getElementById("grant-health-remaining").style.width=percentEnemyHealth;
  }

  function playerHealPercentage() {
    return 100 * (user.heals / user.healCount);
  }

  function updateHeals() {
    var percentPlayerHeals = (playerHealPercentage()).toString() + "%";
    document.getElementById("player-heals-remaining").style.width=percentPlayerHeals;
  }

  function playerWinsPercentage() {
    return 100 * (user.wins / 3);
  }

  function updateWins() {
    var percentPlayerWins = (playerWinsPercentage()).toString() + "%";
    document.getElementById("player-wins-gotten").style.width=percentPlayerWins;
  }

  function newRound(){
    grant.health = enemyHP;
    updateHealth();
    updateHeals();
    checkWin();
  }

  function checkWin() { // Having trouble getting grant's health to not go below 0 and round to reset
    if (user.wins === 3) {
      quitGame();
      document.getElementById("player-update-note").innerText = "You have won!";
    } else if (user.health <= 0 && grant.health <= 0) {
      quitGame();
      document.getElementById("player-update-note").innerText = "You have lost!";
    } else if (grant.health <= 0 && user.wins < 3) {
      user.wins++;
      newRound();
      return;
    }
  }

  function quitGame() {
    document.getElementById("start-button").style.display="block";
    document.getElementById("game-container").style.display="none";
    document.getElementById("input").style.display="block";
  }

})
