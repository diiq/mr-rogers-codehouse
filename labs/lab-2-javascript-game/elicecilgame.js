class Player {
    constructor(name, health, healsRemaining, wins) {
        this.name = name;
        this.health = health;
        this.healsRemaining = healsRemaining;
        this.wins = wins;
    }
    startGame() {
        var start = prompt("Would you like to fight the Champion?");
        if(start === "yes") {
            userName = prompt("Tell us your name.");
        }
        startCombat();
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
    hitGrant() {
        grant.health = (grant.ealth - generateAttackDamage());
        console.log("Grant is now at", grant.health, "HP!");  
    }
    hitUser() {
        user.health = (user.health - generateAttackDamage());
        console.log(user.name, "is now at", user.health, "HP!");
    }   
    checkIfWin() {
        if (grant.health === 0) {
            user.checkIfWin = (user.checkIfWin + 1);
            console.log(user.name, "has", user.wins, "wins!");
        }
    }
    checkIfLoss() {
        if (user.heatlh === 0) {
            console.log(user.name, "has been defeated!");
        }
    }
    oneDeath() {
        while((grant.health > 0) && (user.health > 0 )) {
            hitUser();
            hitGrant();
        }
    }
    // while(user.health > 0) && (user.wins !== 3) && (again !== false) {
    //     oneDeath();
    //     wins();
    //     grant.health = 10;
    //     var again = confirm("Would you like to attack once more or show mercy?")
    //     if(again = again === "attack") {
    //         attack = true;
    //     } else {
    //         false;
    //     }
    // // }
    // console.log(user.name, "has defeated Champion Grant, and shall take his place in history!");
}

const user = new Player("userName", 40, 2, 0);
const grant = new Player("Grant", 10, 0, 0);

// const startCombat = function() {   
//     const hitGrant = function() {
//         grant.health = (grant.ealth - generateAttackDamage());
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
//         if (user.heatlh === 0) {
//             console.log(user.name, "has been defeated!");
//         }
//     }
//     const oneDeath = function() {
//         while((grant.health > 0) && (user.health > 0 )) {
//             hitUser();
//             hitGrant();
//         }
//     }
//     while((user.health > 0) && (user.wins !== 3) && (again !== false)) {
//         oneDeath();
//         wins();
//         grant.health = 10;
//         var again = confirm("Would you like to attack once more or show mercy?")
//         if(again = again === "attack") {
//             attack = true;
//         } else {
//             false;
//         }
//     }
//     console.log(user.name, "has defeated Champion Grant, and shall take his place in history!");
// }