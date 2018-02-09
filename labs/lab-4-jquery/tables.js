const numberOfTables = 9;
var tableIndex; // Used for table selector

class Table {
  constructor(number) {
    this.number = number;
  }

  reserveTable(name, partySize) {
    this.reservationName = name;
    this.partySize = partySize;
  }

  render() {
    var button = $(`<button class="table" id=table-${this.number}>${this.number + 1}</button>`)
    $(".floor").append(button);
  }
}

$(document).ready(function() {

  //CREATES TABLES
  const tables = [];
  for (i = 0; i < numberOfTables; i++) {
    tables.push(new Table(i));
    tables[i].render();
  }

  // DISPLAY TABLE INFO
  function showTableInfo(index) { // Shows only when there is a reservation.
    if (tables[index].name !== undefined) {
      $(".info").css("display", "flex");
      $(".name-info").text(`Name: ${tables[index].name}`);
      $(".phone-info").text(`Phone: ${tables[index].phoneNumber}`);
      $(".size-info").text(`Size: ${tables[index].partySize}`);
    }
  }

  // HOVER OVER TABLE
  $(".table").hover(function() {
      showTableInfo($(".table").index(this))
    },
    function() {
      $(".info").hide();
    }
  );

  // CLICK ON TABLE
  $(".table").click(function() {
    $(".requirements").hide(); // Clear any remaining error messages
    tableIndex = $(".table").index(this);
    $(".table-number").text(`Table #${tableIndex+ 1}`);

    // Recalls entry for editing
    $("#name").val(tables[tableIndex].name);
    $("#phone-number").val(tables[tableIndex].phoneNumber);
    $("#party-size").val(tables[tableIndex].partySize);

    $(".pop-up").slideDown();
  });
});
