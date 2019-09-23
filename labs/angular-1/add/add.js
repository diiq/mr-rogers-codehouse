angular.module("todoList").component("addItem", {
  templateUrl: "add/add.html",
  controller: ['ItemService', function(ItemService) {
  	this.name = "";

  	this.addItem = function() {
  		ItemService.addItem(this.name);
  		this.name = "";
  		
  	}

  }]

});