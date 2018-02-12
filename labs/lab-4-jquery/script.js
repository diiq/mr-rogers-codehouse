
var tableIndex = 0;
var height = 3;
var width = 3;

$(document).ready(function() {
restaurant = (new Restaurant(height, width));
restaurant.render();
});

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
		this.tables[tableIndex].saveTableButton();
	}
}



class Table {
	constructor(tableNumber) {
		this.tableNumber = tableNumber;
		this.party = null;
		this.status = 'avalible';
	}

	createParty(name , partySize, phoneNumber) {
		this.party = new Party(name, partySize, phoneNumber); 
		this.status = 'reserved';
		
	}

	saveTableButton() {
		$("#save-button").click( () => { 
			this.createParty(
			$("#reserver-name").val(),
			$("#reserver-party-size").val(),
			$("#reserver-phone-number").val(),
			);
			console.log(restaurant.tables[3]);
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
	constructor(name, partySize, phoneNumber) {
		this.name = name;
		this.partySize = partySize;
		this.phoneNumber = phoneNumber;
	}
}




