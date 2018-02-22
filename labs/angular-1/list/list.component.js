angular.module("app").component("list", {
  templateUrl: "list/list.html",
  controller: ['ItemService', function(ItemService) {
    this.cost = "";
    this.description = "";
    this.category = "";

    this.addItem = function() {
      return ItemService.addItem(name);
    }
  }]
});
