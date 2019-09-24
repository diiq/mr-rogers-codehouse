angular.module("todoListApp").component("addItem", {
  templateUrl: "item/add-item.html",
  controller: ["ItemService", function(ItemService) {
    this.name = ""; // whats a binding?

    this.addItem = function() {
      console.log("a button was clicked yay!")
      return ItemService.addItem(this.name);
    }
  }]
});
