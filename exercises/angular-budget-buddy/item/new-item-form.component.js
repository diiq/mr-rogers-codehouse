angular.module("budgetBuddy").component("newItemForm", {
  templateUrl: "item/new-item-form.html",
  controller: ['ItemService', 'BudgetService', function(ItemService, BudgetService) {
    this.cost = "";
    this.description = "";
    this.category = "";
    this.categories = BudgetService.getCategories();

    this.addItem = function() {
      if (!this.cost) return;
      return ItemService.addItem(parseFloat(this.cost), this.category, this.description);
    }
  }]
});
