angular.module("app").component("todoList", {
  templateUrl: "todo-list/todo-list.html",
  controller: function() {

    this.todos = [
      // "Food",
      // "Entertainment",
      // "Clothes",
      // "Bills"
    ];

    this.addTodo = function() {
      this.todos.push(this.todo);
      this.todo = "";
    }
  }
});
