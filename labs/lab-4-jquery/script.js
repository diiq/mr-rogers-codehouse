class Party {
  constructor(name, size, phoneNumber) {
    this.name = name;
    this.size = size;
    this.phoneNumber = phoneNumber;
    // id of the parent container
  }
}


class Table {
  constructor(number){
    this.status = "available";
    this.number = number;
    this.reserver = null;

  }


  addParty(name, size, phoneNumber) {
    this.reserver = new Party(name, size, phoneNumber);
    this.status = "reserved";
  }
}
