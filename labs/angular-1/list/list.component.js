angular.module("toDoList").component("list", {
    templateUrl: "list/list.html",
    controller: ["ItemService", function(ItemService) {
        this.name = "";
        this.notes = "";

        this.addItem = function() {
            if (!this.name) return;
            return ItemService.addItem(this.name, this.notes);
        }
    }]
});