angular.module("toDoList").component("item", {
  templateUrl: "item/item.html",
  controller: ['ItemService', "$location", function(StudentService, $location) {
    this.taskName = "";
    this.dueDate = "";
    this.completed = "";

    this.addTasks = function() {
      StudentService.addTask(this.taskName, this.dueDate);
      $location.url("/");
    }
  }]
});
