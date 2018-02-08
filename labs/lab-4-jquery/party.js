
// Variables
  // Table Number:
  // Name:
  // Phone:
  // Party Size:

// Functions
  // Reserve
  // Show Reservation

class Party {
  constructor(name, phoneNumber, size) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.size = size;
    this.reservation = false;
    this.reservedTableNumber = undefined;
  }

  reserve(table) {
    this.name = $("")
    this.reservation = true;
    this.reservedTableNumber = table.number;
  }

  showReservation() {

  }
}

const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9];
$buttons("button:")
const vic = new Party("Vikram", "269-555-5555", 6);
