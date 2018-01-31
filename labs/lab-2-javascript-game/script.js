function gameStart(){
    const play = window.prompt("Do you want to play the game?");
    if (play === "yes"){
        var name =window.prompt("Please enter your name:");
        startFight(name);
    }

}

function getDamage(damage) {
    return Math.floor(Math.random() * 10);

}

function startFight(){
    var winTotal = 0;
    var enemyHP = 15;
    var userHP = 50;
    var anotherAttack;
    var rematch;


    while(winTotal < 5 && (userHP > 0)){
        rematch = window.prompt("Would you like to attack again?");
        if (anotherAttack === "yes"){
            userHP = userHP -


        }
    }

  }
