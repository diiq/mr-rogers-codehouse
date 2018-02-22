angular.module("todoList").component("addItem", {
  templateUrl: "add/add.html",
  controller: ['ItemService', function(ItemService) {

  	this.addItem = function() {
  		ItemService.addItem()
  	}

  }]

  		
  		//somehow add item component into add componentt
});