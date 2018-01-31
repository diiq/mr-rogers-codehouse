var playerHP = 40;
var grantHP = 10;
var playersName = "";
var grantDeaths = 0;

function startGame() {
	 wouldYou = prompt("Would you like to play?");

	if (wouldYou === "yes") {
		playersName = prompt("What would you like to name your hero?");
		
		startCombat();
	}
}

function startCombat() {
	playerHP = 40;
	grantDeaths = 0;
	while (grantDeaths <= 3 && playerHP >= 0) {
		 battle();
	}
	if (grantDeaths === 3) {
	declareWinner(); 
   }else if (playerHP <=0) {
	declareWinner();
	}

}

function battle() {
	grantHP = 10;
	while (grantHP >= 0 && playerHP >= 0) {
		round();
	}
 	if (grantHP <= 0) {
	grantDeaths = grantDeaths + 1;
	console.log(playersName + ' has won a round');
	}

}

function round() {
	
	attack = prompt('Do you want to attack? or quit?')
	if (attack === 'attack') {

		while (playerHP >= 0 && grantHP >= 0) {

			playerHP = playerHP - getDamage();
			console.log(playersName + " " + "has" + " " + playerHP + " " + "health left");

			grantHP = grantHP - getDamage();
			console.log("Grant the Mighty Chicken has" + " " + grantHP + " " + "heath left");

		}
	} else if (attack === 'quit') {
		startGame();
	}
}	

function declareWinner() {
	if (grantDeaths === 3) {
		console.log(playersName + ' has won!!!');
		startGame();
	} else if (playerHP <= 0) {
		console.log('Grant the Almighty has won ');
		startGame();
	}
}


function getDamage() {
	var max = 5;
	var min = 1;

	return  Math.floor(Math.random() * max) + min;
}



// var grantHealth;
// var grantDeaths;
// var userHealth;
// var userName;
	
// function playGame 
// 	ask if wanted to play and name

// 	startCombat 


// 	declare winner 


//  StarCombat 
// 	battle till grand dies 3 times or you die once

//  battle 
// 	grand gets health
// 	skirmish till one players dead (health = 0)
// 	record winner

//  round  
// 	ask if want to attack
// 	if attack deal damage 
// 	if quit, end battle












