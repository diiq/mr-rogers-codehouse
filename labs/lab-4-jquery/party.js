class Party {
  constructor(name, count, contact) {
    this.name = name;
    this.count = count;
    this.contact = contact;
  }
  
  render() {
    return $(`
      <div class="party">
        <div class="party-name">Name: ${this.name}</div>
        <div class="party-count">Party size: ${this.count}</div>
        <div class="party-contact">Contact at: ${this.contact}</div>
      </div>`);
  }
}
