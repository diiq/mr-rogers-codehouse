const myNumber = 5;
const mySquare = myNumber * myNumber;

const anotherNumber = 32;
const anotherSquare = anotherNumber * anotherNumber;

function square(aNumber) {
  return aNumber * aNumber;
}

function squareRoot(x) {
  const guessGoodEnough = function(guess, x) {
    const guessSquare = guess * guess;
    return (x <= guessSquare + .00001) && (x >= guessSquare - .00001);
  }

  const betterGuess = function(guess, x) {
    const otherGuess = x / guess;
    // We know the real answer is BETWEEN guess and otherGuess.
    return (guess + otherGuess) / 2;
  }

  var guess = 1;
  while (!guessGoodEnough(guess, x)) {
    guess = betterGuess(guess, x);
    console.log("Improved guess:", guess);
  }
  return guess;
}
