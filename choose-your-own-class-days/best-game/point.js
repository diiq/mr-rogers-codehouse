class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function makeRandomPoint(minX, maxX, minY, maxY) {
  return new Point(randomInteger(minX, maxX), randomInteger(minY, maxY));
}

function randomInteger(min, max) {
  // return can be === min or <= max, ideal for using as an array index;
  return Math.floor(Math.random() * (max - min)) + min;
}