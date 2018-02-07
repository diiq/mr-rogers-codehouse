class Board {
  constructor(width, height, selector) {
    this.width = width;
    this.height = height;
    // Selector should be the ID of an element on the page.
    this.selector = selector;
  }

  render() {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;
    const container = document.getElementById(this.selector);
    container.appendChild(grid);
  }
}


// Temporary

