angular.module("toDoList").service("ItemService", function () {
    this.items = [];

    this.getItems = function() {
        return this.items;
    }
    
    this.addItem = function(name, status) {
        this.items.push({
            name: name,
            status: status,
        });
    }
});