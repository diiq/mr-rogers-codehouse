angular.module("toDoList").component("itemForm", {
    templateUrl: "item/new-item.html",
    controller: ["ItemService", function(ItemService) {
        this.name = "";
    }]
});