class FloorPlan {
  constructor() {
    this.width = width;
    this.height = height;
    this.tables = [];
  }
}

class Table {
  constructor(status, tableNum) {
    this.tableNum = tableNum;
    this.status = status;
  }
}

class Party {
  constructor(partyName, partySize, partyContact) {
    this.partyName = partyName;
    this.partySize = partySize;
    this.partyContact = partyContact;
  }
}
