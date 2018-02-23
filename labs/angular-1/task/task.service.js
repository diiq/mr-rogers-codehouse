angular.module("toDoList").service("TaskService", function() {
  this.tasks = [{
    taskName: "Task 1",
    dueDate: "02/22/2018",
    priority: "High",
    completed: false,
  }];
  this.addTask = function(name, date, priority) {
    this.tasks.push({
      taskName: name,
      dueDate: date,
      priority: priority,
    });
  }

  this.fetchTasks = function() {
    return this.tasks
  }

  this.completeTask = function(task) {
    task.completed = true;
  }
});
