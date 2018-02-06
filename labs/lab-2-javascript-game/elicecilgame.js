class Player {
    constructor(name, health, healsRemaining, wins) {
        this.name = name;
        this.health = health;
        this.healsRemaining = healsRemaining;
        this.wins = wins;
        this.maxHealth = health;
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
    var start = confirm("Would you like to fight the Champion?");
    var userName = prompt("Tell us your name."); 
    
    var user = new Player(userName, 40, 2, 0);
    const grant = new Player("Grant", 10, 0, 0);

    function updateHealthBar(player, healthbar) {
        if(player.health >= player.MaxHealth) {
            healthbar.style.width = "200px";
        } else {
            var barWidth = (200 / player.maxHealth) * (player.health);
            healthbar.style.width = barWidth + "px";            
        }
    }

    function updateHealth(user, grant) {
        var userHealthBar = document.getElementById("userhealthbar");
        var enemyHealthBar = document.getElementById("enemyhealthbar");

        document.getElementById("healthcounter").innerText = user.name + " has " + user.health + " health left. Grant has " + grant.health + " health left. ";
        updateHealthBar(user, userHealthBar);
        updateHealthBar(grant, enemyHealthBar);
    }
    
    document.getElementById("statsName").innerText = userName;

    document.getElementById("attack").addEventListener("click", combatSequence);
    document.getElementById("heal").addEventListener("click", healSequence);
    function combatSequence() {
        if((grant.health > 0) && (user.health > 0 )) {
            var userDamage = user.generateAttackDamage();
            var grantDamage = grant.generateAttackDamage();
            user.hitPlayer(grantDamage);
            grant.hitPlayer(userDamage); 
        } else if ((user.health > 0) && (user.wins !== 3)) {
            checkIfWin();
            var playAgain = confirm("Would you like to attack again or quit?");
            grant.health = 10; 
        }
        updateHealth(user, grant);
    }

    function checkIfWin() {
        if (grant.health <= 0) {
            user.wins = (user.wins + 1);
            console.log(user.name, "has", user.wins, "wins!");
        } else if(user.health === 0) {
            user.health = 0;
            console.log(userName + "has been defeated!");
        }
    }

    function healSequence() {
        if(user.healsRemaining !== 0) {
            var userHeals = user.heal();
            user.healPlayer(userHeals);
            updateHealth(user, grant);
        }
    }    

    function quitGame() {
        document.getElementById("secondscreen").style.display = "none";
    }
    document.getElementById("quit").addEventListener("click", quitGame);
}

window.addEventListener("load", () => {
    var startButton = document.getElementById("startbutton");
    startButton.addEventListener("click", startGame);  
});