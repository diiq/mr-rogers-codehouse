const cellSize = 200; // in px

class Floor {
  constructor() {
    this.tables = [new Table(1),new Table(2),new Table(3),new Table(4),new Table(5),new Table(6),new Table(7),new Table(8),new Table(9),];
  }

  tableNumber() {
    return this.tables.length
  }
}

  // render() {
  //   this.tables.forEach(table => table.render());
  // }
