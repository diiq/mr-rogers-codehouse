
class Restaurant {
	constructor(height, width) {
		this.tables = [];
		this.height = height;
		this.width = width;

		for (var tableIndex = 0; tableIndex < height * width; tableIndex++ ) {
			 this.tables[tableIndex] = new Table(tableIndex);
		}

		function tableNumber() {
			return this.tables.length
		}
	}
}



class Table {
	constructor(tableNumber) {
		this.tableNumber = tableNumber;
		this.party = null;
		this.status = 'avalible';
	}

	changeStatus() {
		this.status = 'reserved'
	}

	changeColor() {
		if (this.status = 'reserved') {

		}	
	}

	addParty() {
		//this will be inputs from the form
		this.party = new Party('Cusack', 4, 1234567);
		console.log(this.party);
	}

}

class Party {
	constructor(name, partySize, phoneNumber ) {
		this.name = name;
		this.partySize = partySize;
		this.phoneNumber = phoneNumber;
	}


}


