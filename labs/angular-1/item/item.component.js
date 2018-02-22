angular.module("todoListApp").component("todoItem", {
  templateUrl: "item/item.html",
  controller: ["ItemService", function(ItemService) {
    this.name = '<';
  }]
});
