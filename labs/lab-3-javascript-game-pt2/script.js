function getDamage(damage) {
    return Math.floor(Math.random() * 10);

}


class  Character {
  constructor(name,health){
    this.name = name;
    this.health = health;
    this.healsLeft = healTotal;
    this.winTotal = 0;
  }


}

const
const
const

function startGame() {
    const play = window.prompt("Do you want to play the game?");
    if (play === "Yes") {
        var name = window.prompt("Please enter your name:");
        startCombat(name);
    }

    else if (play === "no"){
      return console.log("Why don't you want to play?");
    }

    function startCombat() {
        var winTotal = 0;
        var grantHP = 10;
        var userHP = 40;
        var anotherAction;

        while (winTotal < 5 && (userHP > 0)) {
            anotherAction = window.prompt("Would you like to attack again or quit?");
            if (anotherAction === "attack") {
                userHP = userHP - getDamage();
                grantHP = grantHP - getDamage();
                console.log(name + " has " + userHP + " HP left.");
                console.log(" Your opponent has " + grantHP + " HP left");
            }


            else if (anotherAction === "quit") {
                return console.log(name + " Ran away with " + winTotal + " rounds.");

            }

            if (grantHP <= 0) {
                winTotal = winTotal + 1;
                grantHP = 10;
                userHP = 40;
            }

            if (winTotal >= 5) {
                return console.log("Congratulations you won");

            }
        }
    }
  }

  function destroyButton(){
      document.getElementById("self-destructing-button").style.display = "none";

  }

  window.addEventListener("load", () => {
    document.getElementById("self-destructing-button").addEventListener("click", destroyButton);
  });
