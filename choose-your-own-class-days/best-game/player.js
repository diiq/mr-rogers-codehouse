class Player {
  constructor(location) {
    this.location = location;
    // id of the parent container
  }

  render(parent) {
    const player = document.createElement("div");
    player.className = "player";
    player.style.gridColumn = `${this.location.x} / span 1`;
    player.style.gridRow = `${this.location.y} / span 1`;
    parent.appendChild(player);
  }
}



