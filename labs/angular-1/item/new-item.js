angular.module("toDoList").component("newItem", {
  templateUrl: "item/new-item.html",
  controller: ['ItemService', function(ItemService) {
    this.description = "";

    this.addItem = function() {
      console.log("heyo", this.description);
      return ItemService.addItem(this.description);

    }
  }]
});
