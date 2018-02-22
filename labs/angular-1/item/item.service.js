angular.module("toDoList").service("ItemService", function() {
  this.tasks = [{
    taskName: "Task 1",
    dueDate: "02/22/2018",
    completed: false,
  }];
  this.addTask = function(name, date) {

  }

  this.fetchTasks = function() {
    return this.tasks
  }

  this.completeTask = function(tasks) {
    task.completed = true;
  }
});
