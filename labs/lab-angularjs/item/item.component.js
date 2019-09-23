angular.module("todoApp").component("item", {
  templateUrl: "item/item.html",
  bindings: {
    item: "<"
  },
  controller: function() {
    this.deleteItem = function() {
      // this.items.splice(index,1);
      console.log("deleteItem");
    }
  }
});
