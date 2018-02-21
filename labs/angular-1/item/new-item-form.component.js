angular.module("budgetBuddy").component("newItemForm", {
  templateUrl: "item/new-item-form.html",
  controller: ['ItemService', 'FormService', function(ItemService, FormService) {
    this.name = "";

    this.addItem = function() {
      return ItemService.addItem(this.name);
    }
  }]
});
