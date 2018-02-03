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

    hitPlayer(damage) {
        this.health = this.health - damage;
    }

    heal() {
        var heal = Math.round(Math.random() * 10);  
        return heal;   
    }

    healPlayer(heal) {
        this.health = this.health + heal;
        this.healsRemaining = this.healsRemaining - 1;   
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
            var userDamage = user.generateAttackDamage();
            var grantDamage = grant.generateAttackDamage();
            user.hitPlayer(grantDamage);
            grant.hitPlayer(userDamage);
            console.log(user.name, "has", user.health, "health remaining!");  
            console.log(grant.name,  "has", grant.health,  "health remaining!");          
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
            var playerHeal = confirm("Would you like to heal?");
            if((playerHeal === true) && (user.healsRemaining !== 0)) {
                var userHeal = user.heal();
                user.healPlayer(userHeal);
                console.log("You have", user.healsRemaining, "heals remaining.");
            }

        }
    } 
}