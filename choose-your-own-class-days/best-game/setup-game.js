const cellSize = 50; // in px
var player;
var board;

function setupGame() {
  // 36 is a magic number -- it is the margin of the grid container.
  const columns = Math.floor((window.innerWidth - 36 * 2) / cellSize);
  const rows = Math.floor((window.innerHeight - 36 * 2) / cellSize);
  board = new Board(columns, rows, cellSize);
  player = new Player(new Point(5, 2));
  board.addItem(player);
  board.addNewItem();
  board.render(document.getElementById("grid-container"));
  document.getElementById("close-win-modal").addEventListener("click", closeModals);
}

function renderAll() {
  board.render(document.getElementById("grid-container"));
}

function move(x, y) {
  const newPoint = player.peekAtMove(x, y);

  // Don't do anything if the player can't go there
  if (!board.validPoint(newPoint)) {
    return;
  }

  board.whatElseIsHere(newPoint).forEach(pickup => {
    player.addItem(pickup);
    board.removeItem(pickup);
    board.addNewItem();
  });

  player.location = newPoint;

  renderAll();
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
}

function closeModals() {
  Array.from(document.getElementsByClassName("modal-background")).forEach(m => m.style.display = "none");
}

window.addEventListener("load", setupGame);
window.addEventListener("keydown", handleKeyboardInput);
