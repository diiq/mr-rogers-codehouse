class Party {
  constructor(name, contact, size) {
    this.name = name;
    this.contact = contact;
    this.size = size;
  }
}

class Table {
  constructor(available, number, position, party){
    this.available = true;
    this.number = number;
    this.position = position;
    this.party = null;
  }
  reserveTable() {
    // just create a party and change status
    this.party = new Party(name, contact, size);
    this.available = false;
      }
  render() {
    
  }
    }
  }
}

class Restaurant  {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}
