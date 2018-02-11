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
    const table =
    $("#floor").append(`<button class="table">${this.number}</button>`);
    table.click(() => alert("U clicked a table"));

  }
}

$(document).ready(function() {

  $(".table").on(`click`, function() {

    alert("You clicked me");

  });
});
