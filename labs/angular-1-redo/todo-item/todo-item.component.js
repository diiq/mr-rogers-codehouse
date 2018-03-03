angular.module("todoListApp").component("todoItem", {
  templateUrl: "todo-item/todo-item.html",
  bindings: {
    todoItem: '<'
  },
  controller: ["TodoItemService", function(TodoItemService) {
    this.deleteTodoItem = function() {
      TodoItemService.deleteTodoItem(this.todoItem);
    }
  }]
});
