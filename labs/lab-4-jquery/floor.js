const cellSize = 200; // in px
var tableList = 0;

class Floor {
  constructor(height, width) {
    this.width = height;
    this.height = height;
    var tableList = this.tables = [];
	
  }
	


  makeTables() {
    for (var i = 1; i < 10; i++) {
      var table = new Table(i);
      this.tables.push(table);
      console.log(this.tables[i]);
	  
    }
    return this.tables;
  }


/*   render() {
    const table = document.createElement("div");
    this.tables.forEach(item => item.render(table));
    $(`#floor`).css(`max-width`, `360px`);
    $(`#floor`).css(`height`, `360px`);
  }
 */



  render() {
    const floor = $(`<div class="floor"></div>`)
    $(`.floor`).css(`max-width`, `360px`);
    $(`.floor`).css(`height`, `360px`);
    this.tables.forEach(table => floor.append(table.render()));
    return floor;
  }
  
  }