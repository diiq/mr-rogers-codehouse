angular.module("todoListApp").service("TodoItemService", function() {

  this.todoItems = [];

  this.addTodoItem = function(description) {

    this.todoItems.push({
      description: description,
    });
  }

  this.deleteTodoItem = function(deleteItem) {
    this.todoItems = this.todoItems.filter(item => item !== deleteItem);
  }

  this.getTodoItems = function() {
    return this.todoItems;
  }
});
