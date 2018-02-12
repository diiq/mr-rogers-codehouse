
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

	createParty() {
		$(document).ready(function() {
			$("#save-button").click( () => {
				this.party = new Party(); 
				this.status = 'reserved';
				console.log(restaurant.tables[1].party);
			});
		});
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
	constructor() {
		this.name = $("#reserver-name").val();
		this.partySize = $("#reserver-party-size").val();
		this.phoneNumber = $("#reserver-phone-number").val();
	}
}




