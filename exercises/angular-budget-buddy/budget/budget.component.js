angular.module("budgetBuddy").component("budget", {
  templateUrl: "budget/budget.html",
  bindings: {
    total: '<'
  },
  controller: ['BudgetService', function(BudgetService) {
    this.$onInit = function() {
      this.total = parseFloat(this.total)
      BudgetService.setTotal(this.total);
    }

    this.remaining = function() {
      return BudgetService.remaining();
    }

    this.overSpent = function() {
      return this.remaining() < 0;
    }
  }]
});
