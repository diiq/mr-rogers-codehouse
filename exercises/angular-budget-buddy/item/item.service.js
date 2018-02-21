angular.module("budgetBuddy").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    // Normally this would call to a server
    return this.items;
  }

  this.addItem = function(cost, category, name) {
    // Normally this would call to a server
    this.items.push({
      cost: cost,
      category: category,
      name: name
    });
    console.log(this.items, "hi");
  }
});
