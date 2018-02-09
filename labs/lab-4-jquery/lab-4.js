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
    var button = $(`<button class="table">${this.number}</button>`);
    $(".room-container").append(button);
    // $(".room-container").append(`<button class="table">${this.number}</button>`);
    button.click(function() {
      $(".form").show();
      console.log("I have been clicked on! I am table" + this.number);
});
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

$( document ).ready(function() {
  $(".form").hide();
});

// Goal by end of day be able to reserve a table through the UI

// Add .ready 'listener' to create restaurant floor once DOM is ready
// Add .ready to room-container? To tables render? Both?
