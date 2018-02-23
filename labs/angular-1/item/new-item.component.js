angular.module("toDoList").component("newItem", {
    templateUrl: "item/new-item.html",
    controller: ["ItemService", function(ItemService) {
        this.name = "";

        this.addItem = function() {
            return ItemService.addItem(this.name, this.notes, this.status);
        }
    }]
});