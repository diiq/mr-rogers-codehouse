class Restaurant {
    constructor(width, height, cellSize) {
        this.width = width;
        this.height = height;
        this.cellSize;
    }

    render(parent) {
        parent.innerHTML = "";
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.gridTemplateColumns = `repeat(${this.width}px, ${this.cellSize}px)`;
        grid.style.gridTemplateRows = `repeat(${this.height}px, ${this.cellSize}px)`;
        parent.appendChild(grid);
    }
}