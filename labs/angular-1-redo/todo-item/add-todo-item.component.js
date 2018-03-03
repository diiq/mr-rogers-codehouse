angular.module("todoListApp").component("addTodoItem", {
  templateUrl: "todo-item/add-todo-item.html",

  controller: ['TodoItemService', function(TodoItemService) {
    this.description = "";

    this.addTodoItem = function() {
      TodoItemService.addTodoItem(this.description);
      console.log(TodoItemService.todoItems)
    }
  }]
});
