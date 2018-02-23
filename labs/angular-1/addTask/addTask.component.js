angular.module("toDoList").component("addTask", {
  templateUrl: "addTask/addTask.html",
  controller: ['TaskService', function(TaskService) {
    this.taskName = "";
    this.dueDate = "";
    this.completed = false;
    this.priority = "";
    this.priorities = ["High", "Medium", "Low"];

    this.addTask = function() {
      console.log("hi");
      TaskService.addTask(this.taskName, this.dueDate, this.priority);
      this.taskName = "";
      this.dueDate = "";
    }
  }]
});
