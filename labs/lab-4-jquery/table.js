class Table {
    constructor(tableNum, status) {
        this.tableNum = tableNum;
        this.status = status;
    }

    reserveTable(name, phoneNum, peopleNum) {
        this.reserver = new Party(name, phoneNum, peopleNum);
        this.status = "reserved";
    }

    openTable() {
        this.status = "available";  
        this.reserver = null;
    }

    render() {
        var _this = this;
        var $table = $("#table" + this.tableNum);
        $table.click(function () {
            if(_this.status === "available") {
                var $modalBG = $("#modal-background");
                $modalBG.css("display", "flex");
                $(".tab-num").text("Table number: " + _this.tableNum);
                $(".save").click(function () {
                    var partyName = $(".name").text();
                    var partyNumber = $(".phone-num").text();
                    var peopleNumber = $(".people-num").text();
                    _this.reserveTable(partyName, partyNumber, peopleNumber);
                    $table.css("background-color", "#898989");
                    $modalBG.css("display", "none");
                })
            } else {
                _this.openTable();
                $table.css("background-color", "#cccccc");
            }
            $table.hover(function () {
                $table.append($(`<div class='mouseover'>Name: ${_this.reserver.partyName} Size of Party: ${_this.reserver.peopleNumber} </div>`));
              }, function() {
                $table.find(".mouseover").remove();
              });
        }); 
    }
}

