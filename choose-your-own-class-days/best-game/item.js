class Item {
  constructor(location, name, humanName) {
    this.location = location;
    this.name = name;
    this.humanName = humanName;
    // id of the parent container
  }
  
  render(parent) {
    const player = document.createElement("div");
    player.className = `item item-${this.name}`;
    player.style.gridColumn = `${this.location.x} / span 1`;
    player.style.gridRow = `${this.location.y} / span 1`;
    parent.appendChild(player);
  }
}



