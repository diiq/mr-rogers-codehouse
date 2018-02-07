class Board {
  constructor(width, height, cellSize) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.items = [];
  }

  addItem(item) {
    // item must have render(parent) method.
    this.items.push(item);
  }

  render(parent) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.gridTemplateColumns = `repeat(${this.width}, ${this.cellSize}px)`;
    grid.style.gridTemplateRows = `repeat(${this.height}, ${this.cellSize}px)`;
    parent.appendChild(grid);
    this.items.forEach(item => item.render(grid));
  }
}


// Temporary

