
class Restaurant {
	constructor(height, width) {
		this.tables = [];
		this.height = height;
		this.width = width;

		for (var tableIndex = 0; tableIndex < height * width; tableIndex++ ) {
			 this.tables[tableIndex] = new Table(tableIndex + 1);
		}

		function tableNumber() {
			return this.tables.length
		}
	}

	render() {
		this.tables.forEach(table => table.render());
	}
}



class Table {
	constructor(tableNumber) {
		this.tableNumber = tableNumber;
		this.party = null;
		this.status = 'avalible';
	}

	addParty(name, partySize, phoneNumber) {
		//this will be inputs from the form
		this.party = new Party(name, partySize, phoneNumber);
		this.status = 'reserved';
		console.log(this.party);
	}

	render() {
		$(".main-div").append(`<div>${this.tableNumber}</div>`)
	}

}

class Party {
	constructor(name, partySize, phoneNumber ) {
		this.name = name;
		this.partySize = partySize;
		this.phoneNumber = phoneNumber;
	}


}


