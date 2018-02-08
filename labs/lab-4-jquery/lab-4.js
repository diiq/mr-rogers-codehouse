class Party {
  constructor(name, contact, size) {
    this.name = name;
    this.contact = contact;
    this.size = size;
  }
}

class Table {
  constructor(available, number, position){
    this.available = true;
    this.number = number;
    this.position = position;
    this.party = null;
  }
  reserveTable(name, contact, size) {
    this.party = new Party(name, contact, size);
    this.available = false;
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
    for (var i = 0; i < (this.height * this.width); i++) {
      this.tables.push(new Table(true, i, ""));
    }
  }


}
