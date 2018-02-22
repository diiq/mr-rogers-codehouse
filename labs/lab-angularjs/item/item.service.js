angular.module("todoApp").service("ItemService", function() {
  this.items = [];

  this.addItem = function(category) {
    this.items.push({
      category: category
    });
  }

});
