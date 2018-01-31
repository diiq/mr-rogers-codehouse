function getDamage(damage) {
    return Math.floor(Math.random() * 10);

}

function startGame() {
    const play = window.prompt("Do you want to play the game?");
    if (play === "Yes") {
        var name = window.prompt("Please enter your name:");
        startCombat(name);
    }

    function startCombat() {
        var winTotal = 0;
        var grantHP = 10;
        var userHP = 40;
        var anotherAction;

        while (winTotal < 5 && (userHP > 0)) {
            anotherAction = window.prompt("Would you like to attack again?");
            if (anotherAction === "Yes") {
                userHP = userHP - getDamage();
                grantHP = grantHP - getDamage();
                console.log(name + " has " + userHP + " HP left.");
                console.log(" Your opponent has " + grantHP + " HP left");
            }
            else if (anotherAction === "No") {
                console.log(name + "  won  " + winTotal + " times.");

            }

            if (grantHP <= 0) {
                winTotal = winTotal + 1;
                grantHP = 10;
                userHP = 40;
            }

            if (winTotal >= 5) {
                console.log("Congratulations you won");

            }
        }
    }
  }
