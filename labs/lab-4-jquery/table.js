class Table {
    constructor(tableNum, status, reserver) {
        this.tableNum = tableNum;
        this.status = status;
        this.reserver = reserver;
    }

    checkTableStatus(status) {
        if (status === "available") {
            status = "available";
            return status;
        } else {
            status = "reserved";
            return status;
        }
    }

    changeStatus(status) {
        
    }
}

