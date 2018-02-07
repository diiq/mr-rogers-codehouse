const cellSize = 50; // in px

function setupGame() {
  // 36 is a magic number -- it is the margin of the grid container.
  const columns = Math.floor((window.innerWidth - 36 * 2) / cellSize);
  const rows = Math.floor((window.innerHeight - 36 * 2) / cellSize);
  const board = new Board(columns, rows, cellSize);
  const player = new Player(new Point(5, 2));
  board.addItem(player);
  board.render(document.getElementById("grid-container"));
}

window.addEventListener("load", setupGame);
