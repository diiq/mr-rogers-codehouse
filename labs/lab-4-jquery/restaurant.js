class Restaurant {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tables = [];
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        this.tables.push(new Table(x * height + y + 1, x + 1, y + 1))
      }
    }
  }
  
  render() {
    const restaurant = $(`<div class="restaurant"></div>`)
    restaurant.css("grid-template-columns", `repeat(${this.width}, 120px)`);
    restaurant.css("grid-template-rows", `repeat(${this.height}, 120px)`);
    this.tables.forEach(table => restaurant.append(table.render()));
    return restaurant;
  }
}