angular.module("app").component("newItemForm", {
  templateUrl: "item/new-item-form.html",
  controller: ['ItemService', function(ItemService) {
    this.name = "";

    this.addItem = function() {
      return ItemService.addItem(this.name);
    }
  }]
});
