var grantHealth = 10;
var userHealth = 40; 
var winCount = 0;

function battleSystem() {   
    const damageRoll = function rollDamage() {
        var damage = Math.round(Math.random() + 1);
        return damage;
    }
    const grantHit = function grantDamage() {
        grantHealth = (grantHealth - damageRoll());
        console.log("Grant is now at", grantHealth, "HP!");  
    }
    const userHit = function userDamager() {
        userHealth = (userHealth - damageRoll());
        console.log("User is now at", userHealth, "HP!");
    }
    const wins = function winCounter() {
        if (grantHealth === 0) {
            winCount = (winCount + 1);
            console.log("User has", winCount, "wins!");
        }
    }
    while((grantHealth <= 10) && (grantHealth !== 0) && (winCount !== 3)) {
        grantHit();
        userHit();
        wins();
        return winCount;
        return grantHealth;
        return userHealth;
    }
}