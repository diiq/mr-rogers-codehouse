class Party {
  constructor(name, contact, size) {
    this.name = name;
    this.contact = contact;
    this.size = size;
  }
}

class Table {
  constructor(available, number){ // removed position as constructor method
    this.available = true;
    this.number = number;
    // this.position = position;
    this.party = null;
  }
  reserveTable(name, contact, size) {
    this.party = new Party(name, contact, size);
    this.available = false;
  }
  render() {
    $(".room-container").append(`<button class="table">${this.number}</button>`);
  }
}

class Restaurant  {
  constructor(height, width){
    this.height = height;
    this.width = width;
    this.tables = [];
    this.createTables();
  }
  createTables() {
    for (var x = 0; x < this.width; x++) {
      for (var y = 0; y < this.height; y++) {
        var number = (x * this.height + y) + 1;
          this.tables.push(new Table(true, number));
      }
    }
  }
  render() {
    this.tables.forEach(table => table.render());
  }
}

var height = 3;
var width = 3;

// Goal by end of day be able to reserve a table through the UI

// Add .ready 'listener' to create restaurant floor once DOM is ready
// ***$( document ).ready(function() {
  // ***Handler for .ready() called.
//***});
// Add .ready to room-container? To tables render? Both?
