angular.module("toDoList").component("list", {
    templateUrl: "list/list.html",
    controller: ["ItemService", function(ItemService) {
        this.items = [];
        
        this.items = function() {
            return ItemService.getItems();
        }
    }] 
});