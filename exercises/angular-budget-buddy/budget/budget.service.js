angular.module("budgetBuddy").service("BudgetService", ["ItemService", function(ItemService) {
  this.categories = [
    "Food",
    "Entertainment",
    "Clothes",
    "Bills"
  ];
  this.total = 0;

  this.setTotal = function(newTotal) {
    this.total = newTotal;
  }

  this.getTotal = function() {
    // Someday this might be 'sum over all categories'
    return this.total;
  }

  this.getCategories = function() {
    return this.categories;
  }

  this.remaining = function() {
    return this.total - this.spent();
  }

  this.spent = function() {
    return ItemService.getItems().reduce((a, b) => a + b.cost, 0);
  }
}]);
