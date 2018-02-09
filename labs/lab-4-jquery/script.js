var party;
var width;

class Party {
  constructor(partyName, partySize, partyContact) {
    this.partyName = partyName;
    this.partySize = partySize;
    this.partyContact = partyContact;
  }
}

class Table {
  constructor(tableNum, status) {
    this.tableNum = tableNum;
    this.status = status;
    // this.position = position;
    this.party = null;
  }

  // reserve() {
  //   // if (this.status = true) { // make this happen on click
  //   this.party = new Party(partyName, partySize, partyContact); // placeholder info
  //   this.status = "reserved"; // working on this
  // }
}

class FloorPlan {  // TEST IN CONSOLE... const resturant = new FloorPlan(3,3)
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tables = [];
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var tableNum = (x * height + y) + 1;
        // this.tables.push(new Table(x+1, y+1, tableNum)); // SOMETHING IS HAPPENING HERE
        this.tables.push(new Table(tableNum)); // SOMETHING IS HAPPENING HERE... it was the order, I had status first in class constructor
      }
    }
  }
}









// function createParty() {
//   var party = new Party();
//   Party.partyName = document.getElementById("party-name").innerText;
// }
