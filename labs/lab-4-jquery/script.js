var party;
var width;
var height;

height = document.getElementById("res-height").value;

const resturantName = new FloorPlan(width, height);

// the bummer

// will attempto put this into jQuery later, also will likely shuffle

class Party {
  constructor(partyName, partySize, partyContact) {
    this.partyName = partyName;
    this.partySize = partySize;
    this.partyContact = partyContact;
  }
}

class Table {
  constructor(status, tableNum) {
    this.tableNum = tableNum;
    this.status = status;
    // this.position = position;
    this.party = null;
  }

  reserve() {
    // if (this.status = true) { // make this happen on click
    this.party = new Party(partyName, partySize, partyContact); // placeholder info
    this.status = "reserved"; // working on this
  }
}

class FloorPlan {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tables = [];
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var tableNum = (x * height + y) + 1;
        this.tables.push(new Table(x+1, y+1, tableNum));
      }
    }
  }

  // addTables() {

    this.tables.push(table);



    // write a loop that for each it makes a new table and pushes the tables to the end of the array

    x < width, x++
    (x * height + y) + 1
  }
}




// function createParty() {
//   var party = new Party();
//   Party.partyName = document.getElementById("party-name").innerText;
// }

// ------------------------- NOTES -----------------------------------

// this. allows you to communicate between methods (which are like funcitons) without passing the arguments, if they were variables then they would have a scope that only is witihin the method (like how it works with functions).

// LOOK MORE INTO VARIABLE SCOPE



var aNumber = 5;

function printNumber(aNumber) { // this argument defines a new argument that only has a scope within the function
  console.log
}

if you redefine the variable within a function (without declaring var or const) then the redefined value CAN escape the function
var aNumber = 5;

function a() {
  aNumber = 10; // 10 WILL escape the function
}

function a() {
  var aNumber = 10; // 10 WILL NOT escape the function
}
