class Table {
    constructor(tableNum, status, reserver) {
        this.tableNum = tableNum;
        this.status = status;
        this.reserver = reserver;
    }

    reserveTable(name, phoneNum, peopleNum) {
        this.reserver = new Party(name, phoneNum, peopleNum);
        this.status = "reserved";
    }

    openTable() {
        this.status = "available";
        console.log(this.status);        
    }
}

