// function square(input) {
//   return input * input;
// }
//
// function fourthPower(input) {
//   return (square(input) * square(input));
// }
//
// function guessGoodEnough(guess, x) {
//   const guessSquare = guess * guess;
//   return (x <= guessSquare + 0.0001) && (x >= guessSquare - 0.0001);
// }
//
// function betterGuess(guess, x) {
//   // x / guess === x
//   // x / guess === y
//   const otherGuess = x / guess;
//   return (guess + otherGuess) / 2;
// }

function squareRoot(x) {
  var guess = 1;
  const guessGoodEnough = function() {
    const guessSquare = guess * guess;
    return (x <= guessSquare + 0.0001) && (x >= guessSquare - 0.0001);
  }

  const betterGuess = function() {
    const otherGuess = x / guess;
    return (guess + otherGuess) / 2;
  }

  while (!guessGoodEnough()) {
    guess = betterGuess();
  }
  return guess;
}

function intro(input) {

  var name = input;
  var phrase = "Hi there, ";

  console.log(phrase + name);
}

// takes score, total points, returns grade
function letterGrade(score, total) {
  if ((total <= 0) || (score < 0)) {
    return "Total score must be greater than 0 and your score cannot be negative. Try again."
  }
  const grade = score / total;
  if (grade >= 0.9) {
    return "A";
  } else if (grade >= 0.8) {
    return "B";
  } else if (grade >= 0.7) {
    return "C";
  } else if (grade >= 0.6) {
    return "D";
  } else {
    return "F";
  }
}

function isStringLong(input) {
  return (input.length > 8)
}

// function that takes a number and a function and applies the function to the number

function double(x) {
  return x * 2;
}

function multiplyMaker(x) {
  return x * 15;
}

function applyFunction(number, math) {
  return math(number);
}

function applyNewFunction(number, math) {
  return math
}

function doubleMaker(factor) {
  function double(x) {
    return x * factor;
  }
  return double;
}

function fibonacci(x) {
  var next = 1;
  var number = 0;
  var previous = 0;
  var store;
  for (var i = 0; i < x; i++) {
    store = next;
    next = next + number;
    previous = number
    number = store;
  }
  return number;
}


function fibo(input) {
  if (input === 1) {
    return number;
  } else {
    input--;
    return fibo(number);
  }
}
