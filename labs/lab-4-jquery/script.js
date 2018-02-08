var party;

class FloorPlan {
  constructor() {
    this.width = width;
    this.height = height;
    this.tables = [];
  }

  addTable() {
    // this.tables.push(table);
  }
}

class Table {
  constructor(status, tableNum, party) {
    this.tableNum = tableNum;
    this.status = status;
    // this.position = position;
    this.party = party;
  }

  reserveTable() {
    if (this.status = true) { // make this happen on click
    party = new Party("Tanner", "8", "6167459139"); // placeholder info
    this.status = "reserved"; // working on this
    }
  }
}

class Party {
  constructor(partyName, partySize, partyContact) {
    this.partyName = partyName;
    this.partySize = partySize;
    this.partyContact = partyContact;
  }
}
