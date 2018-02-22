angular.module("todoListApp").service("ItemService", function() { // why is this caps again?
  this.items = [];

  this.getItems = function() {
    // Normally this would call to a server
    return this.items;
  }

  this.addItem = function(name) {
    // Normally this would call to a server
    this.items.push({
      name: name
    });
  }
});
