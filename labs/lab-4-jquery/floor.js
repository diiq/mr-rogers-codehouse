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

  render() {
    this.tables.forEach(table => table.render())
}
}
