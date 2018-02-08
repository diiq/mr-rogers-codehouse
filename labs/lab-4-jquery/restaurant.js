class Restaurant {
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.capacity = width * height;
    this.tables = [];
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++){
        var id = (x * height + y) + 1;
        this.tables.push(new Table(x+1, y+1, id));
      }
    }
  }
}
