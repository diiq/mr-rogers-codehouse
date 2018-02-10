
var player;
var floor;

function setupGame() {
  const columns = 600 / cellSize;
  const rows = 600 / cellSize;
  floor = new Floor(columns, rows, cellSize);

  floor.render(document.getElementById("floor"));

}

function renderAll() {
  floor.render(document.getElementById("floor"));
}





window.addEventListener("load", setupGame);
