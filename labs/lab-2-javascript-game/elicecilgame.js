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
    userName = "user";
    var user = new Player(userName, 40, 2, 0);
    const grant = new Player("Grant", 10, 0, 0);
    
    var start = prompt("Would you like to fight the Champion?");
    if(start === "yes") {
        userName = prompt("Tell us your name."); 
    }

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
        } else {
            console.log(user.name, "has been defeated!");
        }
    }

    while((user.health > 0) && (user.wins !== 3) && (attack !== false)) {
        oneDeath();
        checkIfWin();
        var attack = confirm("Would you like to attack once more or show mercy?")
        if(attack = attack === "attack") {
            attack = true;
            grant.health = 10;
        } else {
            false;
        }
    } 
}

    // while(user.health > 0) && (user.wins !== 3) && (again !== false) {
    //     oneDeath();
    //     checkIfWin();
    //     grant.health = 10;
    //     var again = confirm("Would you like to attack once more or show mercy?")
    //     if(again = again === "attack") {
    //         attack = true;
    //     } else {
    //         false;
    //     }
    // }
    // console.log(user.name, "has defeated Champion Grant, and shall take his place in history!");
// const startCombat = function() {   
//     const hitGrant = function() {
//         grant.health = (grant.health - generateAttackDamage());
//         console.log("Grant is now at", grant.health, "HP!");  
//     }
//     const hitUser = function() {
//         user.health = (user.health - generateAttackDamage());
//         console.log(user.name, "is now at", user.health, "HP!");
//     }   
//     const checkIfWin = function() {
//         if (grant.health === 0) {
//             user.checkIfWin = (user.checkIfWin + 1);
//             console.log(user.name, "has", user.wins, "wins!");
//         }
//     }
//     const checkIfLoss = function() {
//         if (user.health === 0) {
//             console.log(user.name, "has been defeated!");
//         }
//     }
//     const oneDeath = function() {
//         while((grant.health > 0) && (user.health > 0 )) {
//             hitUser();
//             hitGrant();
//         }
//     }
//     console.log(user.name, "has defeated Champion Grant, and shall take his place in history!");
// }