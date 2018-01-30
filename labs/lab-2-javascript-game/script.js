function startGame() {
	 wouldYou = prompt("Would you like to play?");

	if (wouldYou === "yes") {
		var playersName = prompt("What would you like to name your hero?");
	}

	startCombat();
}


function getDamage() {
	var max = 5;
	var min = 1;

	return  Math.floor(Math.random() * max) + min;
}


	function round(playersName) {
		var playersNameHP = 40;
		var grantHP = 10;
		var round = 0;

		while (playersNameHP >= 0 && grantHP >= 0) {

		playersNameHP = playersNameHP - getDamage();
		console.log(playersName + " " + "has" + " " + playersNameHP + " " + "health left");

		grantHP = grantHP - getDamage();
		console.log("Grant the Mighty Chicken has" + " " + grantHP + " " + "heath left");

		 if (grantHP >= 0) {
		 	return round = round + 1;
			console.log(playersName + " " + "won a round");
		} else {
			console.log("you lost");
			return startGame();
		}
	}	
}


function winCount(grantHP, playersName) {
	if (grantHP >= 0) {
		console.log(playersName + " " + "won a round");
		winCount = winCount + 1;
		grantHP = 10;	
	}
}
	 
function winner(playersName, winCount) {
	if (winCount >= 3) {
		console.log(playersName + " " + "wins!");
	} else {
		console.log("Grant the Almighty won :( ");

	}

}
	
function startCombat() {
	while (winCount() <= 3) {
		 round(winCount, winner);
	}
}

	






