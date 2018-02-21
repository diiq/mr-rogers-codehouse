angular.module("toDoList").component("newItem", {
  templateUrl: "item/new-item.html",
  controller: ['ItemService', function(ItemService) {
    this.description = "";

    this.addItem = function() {
      return ItemService.addItem(this.description);
    }
  }]
});