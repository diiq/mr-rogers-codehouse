angular.module("toDoList").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    return this.items;
  }

  this.addItem = function(description) {
    this.items.push({
      description: description
    });
    console.log(this.items, "hi");
  }
});
