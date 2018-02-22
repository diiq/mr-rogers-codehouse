angular.module("toDoList").component("toDoList", {
  templateUrl: "toDoList/toDoList.html",
  controller: function () {
        this.tasks = [];
  }
});
