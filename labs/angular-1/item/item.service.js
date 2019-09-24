angular.module("todoListApp").service("ItemService", function() { // why is this caps again?

  this.todoItems = [];

  this.getItems = function() {
    // Will maybe call to a server?
    return this.todoItems;
  }

  this.addItem = function(name) {
    // Will maybe call to a server?
    this.todoItems.push({
      name: name
    });
    console.log(this.todoItems)
  }

  //$index? use .filter

});
