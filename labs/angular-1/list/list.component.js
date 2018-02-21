angular.module("app").component("list", {
  templateUrl: "list/list.html",
  controller: ['ItemService', 'BudgetService', function(ItemService, BudgetService) {
    this.cost = "";
    this.description = "";
    this.category = "";
    this.categories = BudgetService.getCategories();

    this.addItem = function() {
      return ItemService.addItem(parseFloat(this.cost), this.category, this.description);
    }
  }]
});
