angular.module("codehouse").component("restaurant", {
  templateUrl: "restaurant/restaurant.html",
  bindings: {
    width: "@",
    height: "@"
  },
  controller: function() {
    this.$onInit = function() {
      this.restaurant = new Restaurant(this.width, this.height);
    }
  }
});
