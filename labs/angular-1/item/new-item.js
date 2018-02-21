// Example of how to add new item from budget buddy angular exercise
angular.module("toDoLIst").component("newItem", {
  templateUrl: "item/new-item.html",
  controller: ['ItemService', function(ItemService) { // Need to add ItemService file
    this.description = "";

    this.addItem = function() {
      return ItemService.addItem(this.description);
    }
  }]
});
