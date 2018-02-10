var tables = [];
var party;
var restaurant;

function setup() {
    for(i = 1; i < 10; i++) {   
        var newTable = new Table(i, "available");
        tables.push(newTable);
        newTable.render();
    }
    $(".close-modal").click(function () {
        $(".name").text("");
        $(".phone-num").text("");
        $(".people-num").text("");
        $("#modal-background").css("display", "none");
    });
}  

window.addEventListener("load", setup);