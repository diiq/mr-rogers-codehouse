var grantHealth = 10;
var userHealth = 40; 
var winCount = 0;

// class User {
//     constructor()
// }

const startGame = function() {
    var start = prompt("Would you like to fight the Champion?");
    if(start === "yes") {
        name = prompt("Tell us your name.");
    }
    startCombat();
}

const startCombat = function() {   
    const damageRoll = function() {
        var damage = Math.round(Math.random() + 1);
        return damage;
    }
    const grantHit = function() {
        grantHealth = (grantHealth - damageRoll());
        console.log("Grant is now at", grantHealth, "HP!");  
    }
    const userHit = function() {
        userHealth = (userHealth - damageRoll());
        console.log(name, "is now at", userHealth, "HP!");
    }
    const wins = function() {
        if (grantHealth === 0) {
            winCount = (winCount + 1);
            console.log(name, "has", winCount, "wins!");
        }
    }
    const loss = function() {
        if (userHealth === 0) {
            console.log(name, "has been defeated!");
        }
    }
    const oneDeath = function() {
        while((grantHealth > 0) && (userHealth > 0 )) {
            userHit();
            grantHit();
        }
    }
    while((userHealth > 0) && (winCount !== 3) && (again !== false)) {
        oneDeath();
        wins();
        grantHealth = 10;
        var again = prompt("Would you like to attack once more or show mercy?")
        if(again === "yes") {
            again = true;
        } else {
            again = false;
        }
    }
    console.log(name, "has defeated Champion Grant, and shall take his place in history!");
}