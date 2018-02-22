angular.module("todoListApp").component("todoList", {
  templateUrl: "todo-list/todo-list.html",
  controller: ['ItemService', function(ItemService) {
    this.todoItems = [];
  }]
});
