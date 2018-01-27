const myNumber = 5;
const mySquare = myNumber * myNumber;

const anotherNumber = 32;
const anotherSquare = anotherNumber * anotherNumber;

function square(aNumber) {
  return aNumber * aNumber;
}

const squareOfFour = square(4);
const squareOfFourAgain = square(2+2);

function squareRoot(x) {
  var guess = 1;
  const guessGoodEnough = function guessGoodEnough () {
    const guessSquare = guess * guess;
    // good enough means within .0001 of right
    return (x <= guessSquare + .0001) && (x >= guessSquare - .001);
  }
  const betterGuess = function betterGuess() {
    const otherGuess = x / guess;
    return (guess + otherGuess) / 2;
  }

  while (!guessGoodEnough()) {
    guess = betterGuess();
  }
  return guess;
}

// function that takes a name and logs "hi there -name-"



function name(yourName){
  console.log("Hi there " + yourName);
}

// takes your score on a test, the total possible points on that test, and returns a letter grade

function percentage(achieved, possible) {
  return (achieved / possible) * 100;
}

function yourGrade(percentage) {
  if (percentage >= 90){
    return "A";
  } else if (percentage >= 80 && percentage <= 89) {
    return "B";
  } else if (percentage >= 70 && percentage <= 79) {
    return "C";
  } else if (percentage >= 60 && percentage <= 69) {
    return "D";
  } else {
    return "F";
  }
}

function gradeOnTest(achieved, possible) {
  return yourGrade(percentage(achieved, possible));
}

// function that takes a string and says whether that string is short or long (true = long , false = short). A string
// is long if it is more than 8 charachters

function stringIsLong(entry) {
  return entry.length > 8;
}

function isStringLong(string) {
  var length = string.length;
  if (length > 8) {
    return true;
  } else if (length <= 8) {
    return false;
  }
}

// make a function that double a a Number

function doubleNumber(double) {
  return double * 2;
}


// make a function that takes a number, if the number is even divide it by 2, if it's odd, multiply by two

function divideOrMultiply(evenOdd) {
  if (evenOdd % 2 === 0) {
    return evenOdd / 2;
  } else if (evenOdd % 2 !== 0) {
    return evenOdd * 2;
  }
}

// function that takes as its arguments a funtion and a number, and going to apply the function to the number

function oneNumber(baseNumber) {
  return baseNumber + 1;
}

function funcNum(fn, secondNumber) {
  return fn(secondNumber);
}

// function that takes two functions and a number, and will apply both functions to that number one after another

function fnOne(passOne) {
  return passOne * 2;
}

function fnTwo(passTwo) {
  return passTwo + 1;
}

function fnChain(first, second, appliedTo) {
  return second(first(appliedTo));
}
 // a function that returns a function that doubles a Number

function twoTimes(twice) {
  return twice * 2;
}
