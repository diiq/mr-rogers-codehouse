// Classes and methods

const player = {
  score: 5,
  characterName: "Wizzard",
  takeDamage: function(damage) {
    this.score = this.score - damage;
    // player.score = player.score - damage;
  }
}

// A function that makes objects

function makePlayer(name, initialScore) {
  return {
    score: initialScore,
    characterName: name,
    takeDamage: function(damage) {
      this.score = this.score - damage;
    }
  }
}

// A class

class Player {
  constructor(name, initialScore) {
    this.name = name;
    this.score = initialScore;
  }

  takeDamage(damage) {
    this.score = this.score - damage;
  }
}

const gdorf = new Player("Gadafa", 30);


class Bird {
  constructor(species, song) {
    this.species = species;
    this.song = song;
    this.songSong = song + song;
    console.log("I am a berd.");
  }

  sing() {
    console.log(this.song);
  }
}

const birds = [
  new Bird("Oreo", "tweet"),
  new Bird("Tit", "boooooooooooobbooooooo"),
  new Bird("Woodpecker", "WHAM"),
  new Bird("Goldfink", "spinkspinkaroo"),
  new Bird("Carbinal", "fwishhh"),
]

// Looping over arrays:

// This works, but is really verbose:
//
// for(var birdIndex = 0; birdIndex < birds.length; birdIndex++) {
//   birds[birdIndex].sing();
// }

// Looping using methods and arrow functions

birds.forEach(function (birdy) {
   birdy.sing();
});

// Still pretty verbose -- let's use an arrow function:
birds.forEach(b => b.sing());

// Use map to return an array of things.
const birdSpecies = birds.map(bird => bird.species);

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(n => n * 2);

