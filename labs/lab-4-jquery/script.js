
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

	addParty() {
		this.party = new Party(name, partySize, phoneNumber);
		this.status = 'reserved';
		
	}

	render() {
		var button = $(`<button class="tables">${this.tableNumber}</button>`);
		$(".table-box").append(button);
		button.click( showForm => { $(".form").show() });
	}


	hideForm() {
		$(".form").empty().hide();
	}

}

class Party {
	constructor(name, partySize, phoneNumber ) {
		//this.name = name;
		//this.partySize = partySize;
		//this.phoneNumber = phoneNumber;

		this.name = $("#reserver-name").value();
		this.partySize = $("#reserver-party-size").value();
		this.phoneNumber = $("#reserver-phone-number").value();
	}


}




