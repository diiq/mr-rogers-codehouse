angular.module("todoApp").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    return this.items;
  }

  this.addItem = function(item) {
    this.items.push({
      item: item
    });
  console.log("Hello", this.items);
  }

  this.deleteItem = function() {
    this.items.splice(this.$index, 1);
    console.log("Splice");
  }

});
