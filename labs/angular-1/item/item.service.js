angular.module("todoList").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    return this.items;
  }

  this.addItem = function(item) {
    this.items.push({
      item: item
    });
  }
});
