// In a larger project, I would break these classes up into individual files,
// but this project is very small and it seems silly to do so.

class Restaurant {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tables = [];
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        this.tables.push(new Table(y * width + x + 1, x + 1, y + 1))
      }
    }
  }
}

class Party {
  constructor(name, count, contact) {
    this.name = name;
    this.count = count;
    this.contact = contact;
  }
}


class Table {
  constructor(id, posX, posY) {
    this.id = id;
    this.posX = posX;
    this.posY = posY;
    this.party = null;
  }

  reserveTable(name, size, contact) {
    this.party = new Party(name, size, contact);
  }

  unreserveTable() {
    this.party = null;
  }

  available() {
    return !this.party;
  }
}