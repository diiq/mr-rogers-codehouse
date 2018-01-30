var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var playGame = true;
var battleName = "";


function startGame() {
  var playGame = confirm("Shall we battle!");
  if (playGame === true) {
    var battleName = prompt("Enter your battle name!");
    startCombat(battleName);
  } else alert("Return when you have obtained the courage to battle!!");
}
startGame();

function getDamage(max) {
  return Math.floor(Math.random() * 5) + 1;
}

function attack(battleAnswer) {
  grantHealth -= getDamage();
  userHealth -= getDamage();
}

function battleLog() {
  console.log(battleName + ", Your health is now " + userHealth);
  console.log("Grants health is now " + grantHealth);
}

function battleTally() {
  if (grantHealth <= 0 ){
    wins++;
    grantHealth = 10;
    console.log(battleName + " won round " + wins);
  } else if (userHealth <= 0){
    playGame = false;
    console.log("You lose! Try again");
  }
}

function startCombat(battleName) {
  while (playGame === true) {
    var battleAnswer = confirm("OK for attack, Cancel for retreat");
    if (battleAnswer === true) {
      if (wins === 3) {
        console.log("You beat Grant 3 times, and won the game!");
        break;
      } else
      attack(battleAnswer);

      battleLog();

      battleTally();

    } else {
      alert("Coward! Grant has destroyed you!");
      console.log("Coward! Grant has destroyed you!");
      break;
    }
  }
}
