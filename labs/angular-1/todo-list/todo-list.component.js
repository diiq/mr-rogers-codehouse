angular.module("todoListApp").component("todoList", {
  templateUrl: "todo-list/todo-list.html",
  controller: ['ItemService', function(ItemService) {
    // this.todoItems = []; // do I need this? NO ONLY DEFINED IN SERVICE

    this.todoItems = function() {
      return ItemService.getItems(); // do I need to pass anything here?
    } // HAD TO DEFINE WHAT todoItems is in order for the HTML to display it
  }]

});
