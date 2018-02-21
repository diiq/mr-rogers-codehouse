angular.module("toDoList").component("fullList", {
  templateUrl: "full-list/full-list.html",
  controller: ['ItemService', function(ItemService) {

    this.items = function() {
      console.log(ItemService.getItems()) // EXTRA
      return ItemService.getItems(); // EXTRA
    }
  }]
});
