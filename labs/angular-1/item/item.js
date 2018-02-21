angular.module("todoList").component("itemEntry", {
  templateUrl: "item/item.html",
  bindings: {
  	item: "<"
  },

  controller: function() {
  	this.items = [],

  	function(addItem) {
  		this.items.push(this.item)
  	}
  }

});
