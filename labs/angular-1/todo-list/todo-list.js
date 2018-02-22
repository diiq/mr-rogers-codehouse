angular.module("todoList").component("todoList", {
  templateUrl: "todo-list/todo-list.html",
  controller: ['ItemService', function(ItemService) {
	
	//this.items = [];
  	//this.items = ItemService.getItem();
  
  	this.items = function() {
     return ItemService.getItems();
   }
  }]

});

// the add button adds item to the todo list