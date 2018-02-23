angular.module("todoApp").component("todoform", {
  templateUrl: "form/form.html",
  controller: ['ItemService', function(ItemService) {
    this.items = [];

    this.items = function() {
      return ItemService.getItems();
    }

  }]
});
