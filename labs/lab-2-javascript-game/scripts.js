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
      if (healsRemaining > 0) {
        const min = 1;
        const max = 10;
        return (Math.floor(Math.random() * (max - min + 1) + min));
      } else {
        document.getElementById("player-heal-count").innerText = "You have no remaing heals."
      }
    }
  }

  function flex() {
    // console.log("heyo");
    document.getElementById("start-button").style.display="none";
    document.getElementById("game-container").style.display="flex";
    var grant = new Character("Grant", 40, 0, 0);
    var user = new Character(userName(), 40, 2, 0);
  }

  document.getElementById("start-button").addEventListener("click", flex);
  document.getElementById("attack-button").addEventListener("click", /*function*/);
  document.getElementById("heal-button").addEventListener("click", /*function*/);
  document.getElementById("quit-button").addEventListener("click", /*function*/);

  function chooseWinner(user, grant) {
    if (user.wins >= 5) {
      console.log("You have won!");
    } else if (user.health = 0) {
      console.log("Grant has won!");
    }
  }

  function userName() {
    return document.getElementById("first-input").value;
  }

  function startCombat(player, enemy) {
    while (player.wins < 3 && grant.wins < 3) {
      while (grantPoints > 0 && userPoints > 0) {
        user.health = user.health - grant.getDamage;
        grant.health = grant.health - user.getDamage;
      }
      if (grantPoints <= 0) {
        userNumberWins++;
        grantPoints = 10;
      }
      if (userPoints <= 0) {
          grantNumberWins++;
        }
      }
      chooseWinner(grantNumberWins, userNumberWins);
    }
})
