const cellSize = 200; // in px

class Floor {
  constructor(height, width) {
    this.width = height;
    this.height = height;
    this.tables = [new Table(1),new Table(2),new Table(3),new Table(4),new Table(5),new Table(6),new Table(7),new Table(8),new Table(9)];
  }


  makeTables() {
    for (var i = 0; i < this.tables.length; i++) {
      console.log(this.tables[i]);
    }
  }

  render(parent) {

    const table = document.createElement("div");
    // table.className = "table";
    // table.style.gridTemplateColumns = `repeat(${this.width}, ${this.cellSize}px)`;
    // table.style.gridTemplateRows = `repeat(${this.height}, ${this.cellSize}px)`;
    this.tables.forEach(item => item.render(table));
  }

}
