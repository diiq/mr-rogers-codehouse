angular.module("toDoList").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    return this.items;
    console.log(this.items, "i'm get items");
  }

  this.addItem = function(description) {
    this.items.push({
      description: description
    });
    console.log(this.items, "hi");
  }
});
