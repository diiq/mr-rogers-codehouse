angular.module("todoListApp").component("todoList", {
  templateUrl: "todo-list/todo-list.html",
  controller: ['TodoItemService', function(TodoItemService) {

    this.todoItems = function() {
      return TodoItemService.getTodoItems();
    }
  }]

});
