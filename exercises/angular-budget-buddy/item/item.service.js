angular.module("budgetBuddy").service("ItemService", function() {
  this.items = [];

  this.getItems = function() {
    // Normally this would call to a server
    return this.items;
  }

  this.addItem = function(cost, category, description) {
    // Normally this would call to a server
    return this.items.push({
      cost: cost,
      category: category,
      description: description
    });
  }
});
