// const myNumber = 5;
// const mySquare = myNumber * myNumber;
//
// const anotherNumber = 32;
// const anotherSquare = anotherNumber * anotherNumber;
//
// function square(aNumber) {
//   console.log("I am squaring", aNumber);
//   return aNumber * aNumber;
// }
//
// const squareOfFour = square(4);
// const squareOfFourAgain = square(2 + 2);
// const squareOfFourAgainAgain = square(square(2));
//
// function fourthPower(aNumber) {
//   return square(square(aNumber));
// }
//
// const fourthPowerOf4 = fourthPower(4);
//
// function guessGoodEnough(guess, x) {
//   const guessSquare = guess * guess
//   // Good Enough Means Withing .0001 of Right
//   return (x <= guessSquare + .0001) && (x >= guessSquare - .0001)
// }
//
// function betterGuess(guess, x) {
//   const otherGuess = x / guess;
//   console.log("Making a better guess, between", guess, otherGuess)
//   return (guess + otherGuess) / 2;
// }
//
// function squareRoot(x) {
//   var guess = 1;
//
//   const guessGoodEnough = function() {
//     const guessSquare = guess * guess
//     // Good Enough Means Withing .0001 of Right
//     return (x <= guessSquare + .0001) && (x >= guessSquare - .0001)
//   }
//
//   const betterGuess = function() {
//     const otherGuess = x / guess;
//     console.log("Making a better guess, between", guess, otherGuess)
//     return (guess + otherGuess) / 2;
//   }
//
//   while (!guessGoodEnough()) {
//     guess = betterGuess();
//   }
//   return guess;
// }

/*Anon Function
const squareRoot = function(x) {

}

//Arrow Function
const squareRoot = () => {

}*/

//Function that takes two numbers and returns the sum of the squares
// function sumOfSquares(x, y) {
//   return square(x) + square(y);
// }
//
// const neatFunction = function() {
//   if (5 > 2) {
//     return "Alive!";
//   }
//   return "dead";
// }

//  function helloName(name) {
//   console.log("Hi There, " + name);
// }

//Take Score
//Total Possible
//Return Letter Grade

  function gradeSolver(score, total) {
    var gradePercent = (score / total) * 100;
    console.log(gradePercent);
    if (total > 0){
      if (gradePercent >= 90) {
        return "A";

      } else if (gradePercent >= 80 && gradePercent <= 89) {
        return "B";

      } else if(gradePercent >= 70 && gradePercent <= 79) {
        return "C";

      } else if(gradePercent >= 60 && gradePercent <= 69) {
        return "D"

      } else {
        return "F"
      }
    } else {
      console.log("Please enter a valid score of 0 or more.");
  }
}

//String is short if less than 8

function stringMeasure(string) {
  if (string.length > 8) {
    console.log("This string is long");
    return true;
  } else{
    console.log("This string is short");
    return false;
  }
}

function multiplyByFifteen(x){

}

function stringMeasure2(string) {
    return string.length > 8;
}

function double(x){
  return x * 2;
}

function applyFunction(x,math) {
  return math(x);
}

function multiplyierMaker(factor) {
  function double(x){
    return x * factor;
  }
  return double;
}

function fibCounter(x){
  var next = 1;
  var number = 0;
  var previous = 0;
  var store = 0;
  for (var i = 0; i < x; i++) {
    store = next;
    next = next + number;
    previous = number;
    number = store;
    console.log(number);
  }
}

function fibCounter2(input) {
  var next = 1;
  var number = 0;
  var previous = 0;
  var store = 0;
  if (input === 1) {
    console.log(number);
  } else {
    store = next;
    next = next + number;
    previous = number;
    number = store;
    return fibCounter2(input--);
  }
}



function fib(n) {
  console.log(n);
  if (n === 1) return 1;
  if (n === 0) return 1;
  return fib(n-1) + fib(n-2);
}
