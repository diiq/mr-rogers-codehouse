const myNumber = 5;
const mySquare = myNumber * myNumber;

const anotherNumber = 32;
const anotherSquare = anotherNumber * anotherNumber;

function square(aNumber) {
  return aNumber * aNumber;
}

function squareRoot(x) {
  var guess = 1;

  const guessGoodEnough = function() {
    const guessSquare = guess * guess;
    return (x <= guessSquare + .00001) && (x >= guessSquare - .00001);
  }

  const betterGuess = function() {
    const otherGuess = x / guess;
    // We know the real answer is BETWEEN guess and otherGuess.
    return (guess + otherGuess) / 2;
  }

  while (!guessGoodEnough()) {
    guess = betterGuess();
  }
  
  return guess;
}

// Write the following functions:

// isStringLong("short") // => false
// isStringLong("supercalifragilisticexpialidocious") // => true
// // A string is long if it's more than 8 characters long.

// funcApply(double, 5) // => 10
// funcApply(addOne, 6) // => 7



// doubleMaker()(5) // => 10
// double = doubleMaker();
// double(5) // => 10



// multiplierMaker(5)(5) // => 25
// multiplierMaker(3)(5) // => 15

// double = multiplierMaker(2);
// double(5)  // => 10