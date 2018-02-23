angular.module("app").component("todoList", {
  templateUrl: "todo-list/todo-list.html",
  controller: ["TodoListService", function(TodoListService) {
  this.todos = TodoListService.getTodos();
  this.hold = ""; // Used to store todo in order to clear the input field after entry

    this.addTodo = function() {
      this.hold = this.todo;
      this.todo = "";
      return TodoListService.addTodo(this.hold);
    }
  }]
});
