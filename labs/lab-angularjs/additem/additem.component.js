angular.module("todoApp").component("additem", {
  templateUrl: "additem/additem.html",
  controller: ['ItemService', function(ItemService) {
    this.item = "";

    this.addItem = function() {
      ItemService.addItem(this.item)
      console.log("yes");
    }

  }]
});
