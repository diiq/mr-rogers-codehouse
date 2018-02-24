angular.module("toDoList").component("task", {
  templateUrl: "task/task.html",
  bindings: {
    task: '<'
  },
  controller: function () {


    this.hp = function () {
      return this.task.priority === "High";
    }
    this.mp = function () {
      return this.task.priority === "Medium";
    }
    this.lp = function () {
      return this.task.priority === "Low";
    }
  }
});
