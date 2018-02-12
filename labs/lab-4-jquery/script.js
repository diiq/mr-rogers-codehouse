
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
    this.party = null;

  }

  addParty(name, size, phoneNumber) {
    var party = new Party(name, size, phoneNumber);
    this.status = "reserved";
    this.party = party;
  }


  availableClass() {
    if (this.party) {
      return "unavailable";
    } else {
      return "available";
    }
  }

  showForm() {
    $(`#form`).css(`display`, `block`);
    $("#save").click(() => {
      this.addParty(
        $("#party-name").val(),
        $("#party-size").val(),
        $("#party-contact").val());
        console.log("You clicked Save");
        this.hideForm();
      });

    }

    hideForm() {
      $(`#form`).css(`display`, `none`);
    }



    render() {
      const table = $(`<button class="table"><div class="table-id">${this.number}</div></button>`);
      $(".floor").append(table);
      table.click(() => this.showForm());
      /* table.click(() => $(`.table-id`).css("background-color", "#7e7272")); */
      table.click(() => console.log("U clicked table " + this.number));
      /* return table; */
    }



  }
