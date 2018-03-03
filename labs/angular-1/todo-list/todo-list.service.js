angular.module("app").service("TodoListService", function() {
  this.todos = [];

  this.getTodos = function() {
    return this.todos;
  }

  this.addTodo = function(todo) {
    this.todos.push(todo);
  }
});
