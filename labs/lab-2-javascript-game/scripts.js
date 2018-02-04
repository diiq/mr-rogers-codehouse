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
      if (this.healsRemaining > 0) {
        const min = 1;
        const max = 10;
        return (Math.floor(Math.random() * (max - min + 1) + min));
        this.healsRemaining = this.healsRemaining - 1;
      } else {
        document.getElementById("player-update-note").innerText = "You have no heals left.";
      }
    }
  }

  const playerHP = 40;
  const enemyHP = 10;
  const maxPoints = 40;
  const healCount = 2;
  const winsNeeded = 5;

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
    user = new Character(userName(), playerHP, healCount, winsNeeded);

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
      console.log("hello", user.health, grant.health, user.healsRemaining);
    }

    function heal() {
      user.health = user.health + grant.getHeal();
      // updateHealth();
      console.log("hello", user.health, grant.health, user.healsRemaining);
    }

    function quitGame() {
      document.getElementById("start-button").style.display="block";
      document.getElementById("game-container").style.display="none";
      document.getElementById("input").style.display="block";
    }
  }

  function playerHealthPercentage() {
    return 100 * (user.health / user.playerHP);
  }

  function grantHealthPercentage() {
    return 100 * (grant.health / grant.enemyHP);
  }
  // function updateHealth() {
  //   percentEnemyHealth = (grantHealthPercentage()).toString() + "%";
  //   percentPlayerHealth = (playerHealthPercentage()).toString() + "%";
  //   document.getElementsByClassName("player-health-remaining").style.width=playerHealthPercentage;
  //   document.getElementsByClassName("grant-health-remaining").style.width=enemyHealthPercentage;
  // }

  function newRound(){
    grant.health = enemyHP;
    playerHealthPercentage();
    grantHealthPercentage();
  }

  function checkWin() {
    if (wins === 3) {
      quitGame();
      document.getElementById("player-update-note").innerText = "You have won!";
    } else if (user.health <= 0) {
      quitGame();
      document.getElementById("player-update-note").innerText = "You have lost!";
    }else if (enemy.health === 0 && winCount < 3){
      wins++;
      newRound++;
      roundReset();
      return;
    }
  }

})
