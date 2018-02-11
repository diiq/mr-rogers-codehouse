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


  render() {
    const table = $(`<button class="table">${this.number}</button>`);
    $("#floor").append(table);
    table.click(() => console.log("U clicked table " + this.number));
  }
}
