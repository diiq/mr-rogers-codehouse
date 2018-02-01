const startGame = function() {
    var start = prompt("Would you like to fight the Champion?");
    if(start === "yes") {
        userName = prompt("Tell us your name.");
    }
    startCombat();
}

class Player {
    constructor(name, health, healsRemaining, wins) {
        this.name = name;
        this.health = health;
        this.healsRemaining = healsRemaining;
        this.wins = wins;
    }
    generateAttackDamage() {
        var damage = Math.round(Math.random() * 3);
        return damage;        
    }
    heal() {
        var heal = Math.round(Math.random() * 10);  
        return heal;
        this.healsRemaining - 1;      
    }
}

const user = new Player("userName", 40, 2, 0);
const grant = new Player("Grant", 10, 0, 0);

const startCombat = function() {   
    const grantHit = function() {
        grant.health = (grant.ealth - generateAttackDamage());
        console.log("Grant is now at", grant.health, "HP!");  
    }
    const userHit = function() {
        user.health = (user.health - generateAttackDamage());
        console.log(user.name, "is now at", user.health, "HP!");
    }   
    const wins = function() {
        if (grant.health === 0) {
            user.wins = (user.wins + 1);
            console.log(user.name, "has", user.wins, "wins!");
        }
    }
    const loss = function() {
        if (user.heatlh === 0) {
            console.log(user.name, "has been defeated!");
        }
    }
    const oneDeath = function() {
        while((grant.health > 0) && (user.health > 0 )) {
            userHit();
            grantHit();
        }
    }
    while((user.health > 0) && (user.wins !== 3) && (again !== false)) {
        oneDeath();
        wins();
        grant.health = 10;
        var again = prompt("Would you like to attack once more or show mercy?")
        if(again === "yes") {
            again = true;
        } else {
            again = false;
        }
    }
    console.log(user.name, "has defeated Champion Grant, and shall take his place in history!");
}