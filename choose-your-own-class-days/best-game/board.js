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

  validPoint(point) {
    const outcome = (point.x > 0 && point.x <= this.width) && (point.y > 0 && point.y <= this.height);
    return outcome;
  }

  whatElseIsHere(point) {
    return this.items.filter(item => item.location.samePoint(point));
  }

  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
    return item;
  }
  
  addNewItem() {
    const item = new Item(makeRandomPoint(1, this.width, 1, this.height));
    this.addItem(item);
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

