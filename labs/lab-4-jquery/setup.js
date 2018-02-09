const cellSize = 30;
var newRest = new Restaurant(600, 600, 200, 9);

function setup() {
    newRest.render("table-plan");
}

window.addEventListener("load", setup);