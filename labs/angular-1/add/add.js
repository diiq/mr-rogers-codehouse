angular.module("todoList").component("addItem", {
  templateUrl: "add/add.html",
  controller: ['itemEntry', function(itemEntry) {

  	addItem = function(itemEntry) {
  		itemEntry.push()

  	}

  }]
});