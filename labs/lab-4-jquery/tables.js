class Table {
  constructor(number) {
    this.number = number;
  }

  reserveTable(name, partySize) {
    this.reservationName = name;
    this.partySize = partySize;
  }

  render() {
    var button = $(`<button class="table" id=table-${this.number}>${this.number + 1}</button>`)
    $(".floor").append(button);
  }
}

const numberOfTables = 9;
var tables = [];
var currentTable;

$(document).ready(function() {
  for (i = 0; i < numberOfTables; i++) {
    tables.push(new Table(i));
    tables[i].render();
  }

  // Clicking on the table
  $(".table").click(function() {
    // `this` is the DOM element that was clicked
    currentTable = $(".table").index(this) + 1;
    $(".table-number").text(`Table #${currentTable}`);
    $(".pop-up").slideDown();
  });
});
