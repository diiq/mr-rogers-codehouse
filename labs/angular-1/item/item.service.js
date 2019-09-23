angular.module("todoList").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    return this.items;
  }

  this.addItem = function(name) {
    this.items.push({
      name: name
    });
  }
});
