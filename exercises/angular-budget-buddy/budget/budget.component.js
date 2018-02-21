angular.module("budgetBuddy").component("budget", {
  templateUrl: "budget/budget.html",
  controller: ['BudgetService', 'ItemService', function(BudgetService, ItemService) {

    this.total = function() {
      return BudgetService.total;
    }

    this.remaining = function() {
      return BudgetService.remaining();
    }

    this.overSpent = function() {
      return this.remaining() < 0;
    }

    this.items = function() {
      return ItemService.getItems();
    }

    this.budgetSet = function() {
      return !!BudgetService.total;
    }
  }]
});
