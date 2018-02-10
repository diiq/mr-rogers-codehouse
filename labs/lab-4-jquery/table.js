class Table {
  constructor(x, y, id){
    this.id = id;
    this.selector = (`table-${this.id}`)
    this.status = "avaliable";
    this.positionX = x;
    this.positionY = y;
    this.party = null;
  }
  reserve(party) {
    this.status = "reserved";
    this.party = party;
    $(`"${this.selector}`).css("background-color", "#7e7272");
  }
  unreserve() {
    this.status = "avaliable";
    this.party = null;
  }
  render() {
    var button = $(`<div class="button-container" id="div-${this.selector}"><button class="table" id="${this.selector}">${this.id}</button></div>`);
    $("#restaurant-wrapper").append(button);
  }
  initiateForm(){
    var button = $(`<button class="table" id="${this.selector}">${this.id}</button>`)
    $(button).click(this.displayForm());
    console.log("Click");
  }
  displayForm(){
    $(".modal").css("display", "flex");
    $("#formTableInfo").text(`Table Number: ${this.id}`)
  }
}
