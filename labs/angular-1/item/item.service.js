angular.module("todoList").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    return this.items;
  }

  this.addItem = function(item) {
    // Normally this would call to a server
    this.items.push({
      item: item
    });
  }
});
