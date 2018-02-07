const cellSize = 50; // in px
var player;
var board;

function setupGame() {
  // 36 is a magic number -- it is the margin of the grid container.
  const columns = Math.floor((window.innerWidth - 36 * 2) / cellSize);
  const rows = Math.floor((window.innerHeight - 36 * 2) / cellSize);
  board = new Board(columns, rows, cellSize);
  player = new Player(new Point(5, 2));
  const item = new Item(new Point(8, 8));
  board.addItem(item);
  board.addItem(player);
  board.render(document.getElementById("grid-container"));
}

function renderAll() {
  const gameElt = document.getElementById("grid-container");
  gameElt.innerHTML = "";
  board.render(gameElt);
}

function move(x, y) {
  const newPoint = player.peekAtMove(x, y);
  if (board.validPoint(newPoint)) {
    player.location = newPoint;
  }
}

function handleKeyboardInput(e) {
  switch(e.keyCode) {
    case 38:  
      move(0, -1);
      break;
    case 39:  
      move(1, 0);
      break;
    case 40:  
      move(0, 1);
      break;
    case 37:  
      move(-1, 0);
      break;
  }
  renderAll();
}

window.addEventListener("load", setupGame);
window.addEventListener("keydown", handleKeyboardInput);