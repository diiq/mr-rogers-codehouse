angular.module("toDoList").service("ItemService", function () {
    this.items = [];

    this.getItems = function() {
        return this.items;
    }
    
    this.addItem = function(name, notes, status) {
        this.items.push({
            name: name,
            notes: notes,
            status: status,
        });
    }
});