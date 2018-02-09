class Restaurant {
    constructor(width, height, numOfTables) {
        this.width = width;
        this.height = height;
        this.numOfTables = numOfTables;
    }

    render(parent) {
        parent.innerHTML = "";
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.gridTemplateColumns = `repeat(${this.width}, ${this.cellSize}px)`;
        grid.style.gridTemplateRows = `repeat(${this.height}, ${this.cellSize}px)`;
        parent.appendChild(grid);
    }
}