angular.module("toDoList").component("toDoList", {
  templateUrl: "toDoList/toDoList.html",
  controller: ['TaskService', function (TaskService) {
    this.tasks = function () {
      return TaskService.fetchTasks();
    }
  }]
});
