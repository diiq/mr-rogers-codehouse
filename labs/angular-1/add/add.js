angular.module("todoList").component("addItem", {
  templateUrl: "add/add.html",
  controller: ['ItemService', function(ItemService) {
  	this.item = "";

  	this.addItem = function() {
  		ItemService.addItem(this.item)
  	}

  }]

  		
  		//somehow add item component into add componentt
});