
// Variables
  // Table Number:
  // Name:
  // Phone:
  // Party Size:

// Functions
  // Reserve
  // Show Reservation

class Party {
  constructor(name, phoneNumber, partySize, tableNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.partySize = partySize;
    this.reservedTableNumber = tableNumber;
  }

  showReservation() {

  }
}

var party = [];

$("#save").click(function() {
  var name = $('#name').val();
  var phoneNumber = $('#phone-number').val();
  var partySize = $('#party-size').val();
  party.push(new Party(name, phoneNumber, partySize, currentTable));
  $(".pop-up").slideUp();
});
