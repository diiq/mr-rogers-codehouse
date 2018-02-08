class Table {
  constructor(x, y, id){
    this.id = id;
    this.status = "avaliable";
    this.positionX = x;
    this.positionY = y;
    this.party = null;
  }
  reserve(party) {
    this.status = "reserved";
    this.party = party;
  }
  unreserve() {
    this.status = "avaliable";
    this.party = null;
  }
}
