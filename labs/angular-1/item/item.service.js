angular.module("app").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    return this.items;
  }

  this.addItem = function(name) {
    return this.items.push({
      name: name
    });
  }
});
