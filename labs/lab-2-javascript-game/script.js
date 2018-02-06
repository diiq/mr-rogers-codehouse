var userPlayer;
var grant;

window.addEventListener("load", () => {
	document.getElementById('start-button').addEventListener('click', startGame);
	document.getElementById('attack-button').addEventListener('click', attack);
	document.getElementById('heal-button').addEventListener('click', heal);
	document.getElementById('quit-button').addEventListener('click', quit);
});

function startGame() {
	const playersName = document.getElementById('players-name').value;
	userPlayer = new Player(playersName, 40);
	grant = new Player('Grant', 10);
	document.getElementById('start-div').style.display = 'none';
	document.getElementById('main-div').style.display = 'flex';
	document.getElementById('users-name').innerText = playersName;
	document.getElementById('grants-name').innerText = 'Grant The Almighty Chicken';
	document.getElementById('heals-remaining').innerText = 'Heals Left: ' + userPlayer.numberOfHeals + '/2';
	document.getElementById('win-count').innerText = 'Wins: ' + userPlayer.wins + '/5'
}

function attack() {
	userPlayer.damageDone();
	document.getElementById('player-text').innerText = 'Grant The Almighty Chicken attacks! ' + userPlayer.name + ' now has ' + userPlayer.health + ' health left.';
	grant.damageDone();
	document.getElementById('grant-text').innerText = userPlayer.name + ' attacks! Grant The Almighty Chicken now has ' + grant.health + ' health left.';

	var playerHealthBar = (userPlayer.health / 40) * 100;
	document.getElementById('players-health').style.width = playerHealthBar + '%';
	var grantHealthBar = (grant.health / 10) * 100;
	document.getElementById('grants-health').style.width = grantHealthBar + '%';

	
	if (playerHealthBar < 75 && playerHealthBar > 45) {
		document.getElementById('players-health').style.backgroundColor = "yellow";
	} else if (playerHealthBar < 45) {
		document.getElementById('players-health').style.backgroundColor = "red";
	}

	if (grantHealthBar < 75 && grantHealthBar > 40) {
		document.getElementById('grants-health').style.backgroundColor = "yellow";
	} else if (grantHealthBar < 40) {
		document.getElementById('grants-health').style.backgroundColor = "red";
	}

	if (grant.health <= 0 && userPlayer.wins <= 5) {
		winCount();
	}

	if (userPlayer.health <= 0) {
		grantWinner();
	} else if (userPlayer.wins === 5 & grant.health <= 0) {
		userWinner();
	}
}

function heal() {
	if (userPlayer.numberOfHeals > 0 && userPlayer.health <= 40) {
		userPlayer.healPlayer();
		document.getElementById('player-text').innerText = userPlayer.name + ' has healed. Now has ' + userPlayer.health + ' health.';
		document.getElementById('heals-remaining').innerText = 'Heals Left: ' + userPlayer.numberOfHeals + '/2';
		var playerHealthBar = (userPlayer.health / 40) * 100;
		document.getElementById('players-health').style.width = playerHealthBar + '%';
	}
}

function winCount() {
	userPlayer.winRound();
	document.getElementById('player-text').innerText = userPlayer.name + ' has won a round!';
	document.getElementById('win-count').innerText = 'Wins: ' + userPlayer.wins + '/5';
	grant.health = 10;
}

function userWinner() {
	document.getElementById('player-text').innerText = userPlayer.name + ' has won!!!';
	document.getElementById('grant-text').innerText = userPlayer.name + ' has won!!!';
	document.getElementById('attack-button').style.display = 'none';

}

function grantWinner() {
	document.getElementById('grant-text').innerText = 'Grant has won! You suck!';
	document.getElementById('player-text').innerText = 'Grant has won! You suck!';
	document.getElementById('attack-button').style.display = 'none';

}

function quit() {
	document.getElementById('player-text').innerText = userPlayer.name + ' has quit :(';
	location.reload();
}

function getRandom(min, max) {
	
	return  Math.floor(Math.random() * max) + min;
}


class Player {
	constructor(name , health) {
		this.name = name;
		this.health = health;
		this.wins = 0;
		this.numberOfHeals = 2;
	}

	damageDone() {
		this.health = this.health - getRandom(1, 3);
	}

	winRound() {
		this.wins = this.wins + 1;

	}

	healPlayer() {
		this.health = this.health + getRandom(1 , 10);
		this.numberOfHeals = this.numberOfHeals - 1 ;

	}
}

