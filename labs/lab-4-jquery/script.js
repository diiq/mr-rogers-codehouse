var party;
var width;
// var table;

$(document).ready(function() { // not able to get this to quite work with jQuery
   $(".form").hide();
   var resturant = new FloorPlan(3, 3);
   FloorPlan.render();
   Table.render();
});

class Party {
  constructor(partyName, partySize, partyContact) {
    this.partyName = partyName;
    this.partySize = partySize;
    this.partyContact = partyContact;
  }
}

class Table {
  constructor(tableNum, status, party, available) {
    this.tableNum = tableNum;
    this.status = status;
    this.party = null;
    this.available = true;
  }

  reserve(partyName, partySize, partyContact) {
    if (this.status = true) { // make this happen on click
    this.party = new Party(partyName, partySize, partyContact);
    this.status = false;
    }
  }

  render() {
    table = $(`<button class="table">${this.tableNum}</button>`);
    $(".floorplan").append(button);
    button.click(function() {
      $(".form").show();
      console.log("Table clicks" + this.tableNum);
    });
  }
}

class FloorPlan {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tables = [];
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var tableNum = (x * height + y) + 1;
        // this.tables.push(new Table(x+1, y+1, tableNum));
        this.tables.push(new Table(tableNum));
      }
    }
  }

  render() {
    this.tables.forEach(table => table.render());
  }
}
