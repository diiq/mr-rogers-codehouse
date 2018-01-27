const myNumber = 5;
const mySquare = myNumber * myNumber;

const anotherNumber = 32;
const anotherSquare = anotherNumber * anotheNumber;

function square(aNumber) {
  console.log("I am squaring", aNumber);
  return aNumber * aNumber;
}

const squareOfFour = square(4);
const squareOfFourAgain = square(2+2);

function fouthPower(aNumber) {
  return aNumber * aNumber * aNumber * aNumber;
}
const aNumber = 4

function guessGoodEnough(guess, x) {
  const guessSquare = guess * guess;
  // good enough means within .0001 of right
  return (x <= guessSquare + .0001) && (x <= guessSquare - .001)
}
function betterGuess(guess, x) {
   // x / guess === x;
   //  if x / guess !=== x
   const otherGuess = x / guess;
   //  We know the real answer is BETWEEN guess and otherGuess
   retuen (guess = otherGuess) / 2;
}

function squareRoot(x) {
  debugger
  var guess = 1;
  while (!guessGoodEnough(guess, x)) {
    console.log("Improved guess:", guess);
    guess = betterGuess(guess, x);
  }
  return guess;
}

const betterGuess = function() {
  const otherGuess = x / guess;
  return (guess = otherGuess) / 2;
}
var guess = 1;
while (!guessGoodEnough()) {
  guess = betterGuess();
}
return guess;
