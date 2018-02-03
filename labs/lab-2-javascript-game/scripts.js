window.addEventListener("load", () => {
  class Character {
    constructor(name, health, healsRemaining, wins) {
      this.name = name;
      this.health = health;
      this.healsRemaining = healsRemaining;
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
        this.healsRemaining = this.healsRemaining - 1;
      }
    }


  const playerHP = 40;
  const enemyHP = 40;
  const healCount = 2;
  const winsNeeded = 5;
  var grant;
  var user;

  function hideStart() {
    // console.log("heyo");
    document.getElementById("start-button").style.display="none";
    document.getElementById("game-container").style.display="block";
  }

  document.getElementById("start-button").addEventListener("click", startCombat);

  function startCombat() {
    hideStart();
    grant = new Character("Grant", enemyHP);
    user = new Character(userName(), playerHP, healCount, winsNeeded);
    document.getElementById("attack-button").addEventListener("click", attack);
    document.getElementById("heal-button").addEventListener("click", heal);
    document.getElementById("quit-button").addEventListener("click", quitGame);
  }

  function chooseWinner() {
    console.log("winner");
    if (user.wins = 5) {
      console.log("You have won!");
    } else if (user.health = 0) {
      console.log("Grant has won!");
    }
  }

  function userName() {
    return document.getElementById("first-input").value;
  }

  function attack() {
    user.health = user.health - grant.getDamage();
    grant.health = grant.health - user.getDamage();
    console.log("hello", user.health, grant.health);
  }

  function heal() {
    user.health = user.health + grant.getHeal();
    grant.health = grant.health + user.getHeal();
    console.log("hello", user.health, grant.health);
  }

  function quitGame() {
    document.getElementById("start-button").style.display="block";
    document.getElementById("game-container").style.display="none";
  }

})
