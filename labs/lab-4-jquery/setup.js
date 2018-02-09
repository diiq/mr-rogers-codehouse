const cellSize = 200; //in px
var table;
var party;
var restaurant;

function setup() {
   var tableplan = document.getElementById("table-plan");
   const columns = tableplan.innerWidth / cellSize; 
   const rows = tableplan.innerHeight / cellSize;
   restaurant = new Restaurant(columns, rows, cellSize);
   restaurant.render(document.getElementById("table-plan"));
}

window.addEventListener("load", setup);