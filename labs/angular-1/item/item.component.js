angular.module("todoListApp").component("todoItem", {
  templateUrl: "item/item.html",
    bindings: {
      todoItem: '<' // THIS is linking the attribute
    },
    controller: function() {}
});
