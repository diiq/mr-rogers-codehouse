const cellSize = 200; // in px

class Floor {
  constructor(height, width) {
    this.width = height;
    this.height = height;
    this.tables = [];
  }


  makeTables() {
    for (var i = 1; i < 10; i++) {
      var table = new Table(i);
      this.tables.push(table);
      console.log(this.tables[i]);

    }
  }


  render() {

    const table = document.createElement("div");
    this.tables.forEach(item => item.render(table));
  }

}

// $("button").click(function() {
//   $(".available").addClassByClick(".reserved");
// });
