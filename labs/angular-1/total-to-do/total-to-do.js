angular.module("toDoList").component("totalToDo", {
  templateUrl: "total-to-do/total-to-do.html",
  controller: ['ItemService', function(ItemService) {

    this.itemTotal = function() {
      return ItemService.getItems().length;
    }
  }]
});
