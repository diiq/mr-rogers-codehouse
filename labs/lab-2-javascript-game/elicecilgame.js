damage = 1;

class Player {
    constructor(name, health, healsRemaining, wins) {
        this.name = name;
        this.health = health;
        this.healsRemaining = healsRemaining;
        this.wins = wins;
    }

    generateAttackDamage(damage) {
        damage = Math.round(Math.random() * 3);   
        this.health = this.health - damage;
        console.log(this.name, "is now at", this.health, "HP!"); 
        return this.health;     
        return damage;
    }

    heal() {
        heal = Math.round(Math.random() * 10);  
        this.health = this.health + heal;
        this.healsRemaining - 1;   
        return this.health;   
    }
}


function startGame() {
    var attack = true;
    userName = "user";
    var user = new Player(userName, 40, 2, 0);
    const grant = new Player("Grant", 10, 0, 0);
    
    var start = confirm("Would you like to fight the Champion?");
    var userName = prompt("Tell us your name."); 

    function oneDeath() {
        while((grant.health > 0) && (user.health > 0 )) {
            user.generateAttackDamage();
            grant.generateAttackDamage();
        }
    }

    function checkIfWin() {
        if (grant.health === 0) {
            user.wins = (user.wins + 1);
            console.log(user.name, "has", user.wins, "wins!");
            return user.wins;
        } else if(user.health === 0) {
            user.health = 0;
            console.log(userName + "has been defeated!");
            return user.health;
        } else {
            return;
        }
    }

    while((user.health > 0) && (user.wins !== 3) && (attack === true)) {
        oneDeath();
        checkIfWin();
        var attack = confirm("Would you like to attack once more or show mercy?")
        if(attack !== true) {
            console.log("The battle has ended.");
        } else {
            grant.health = 10;
        }
    } 
}