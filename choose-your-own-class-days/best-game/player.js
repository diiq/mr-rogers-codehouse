class Player {
  constructor(location) {
    this.location = location;
    this.items = [];
    // id of the parent container
  }

  addItem(item) {
    this.items.push(item);
  }

  peekAtMove(x, y) {
    return new Point(this.location.x + x, this.location.y + y);
  }

  render(parent) {
    const player = document.createElement("div");
    player.className = "player";
    player.style.gridColumn = `${this.location.x} / span 1`;
    player.style.gridRow = `${this.location.y} / span 1`;
    player.innerText = this.items.length.toString();
    parent.appendChild(player);
  }
}



