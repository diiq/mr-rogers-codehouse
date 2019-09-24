angular.module("todoListApp").component("todoStats", {
  templateUrl: "todo-stats/todo-stats.html",
  controller: ["ItemService", function(ItemService) {
    this.todos = ItemService.getItems().length;
  }]
});
