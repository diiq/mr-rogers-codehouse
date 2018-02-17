angular.module("codehouse").component("coolFood", {
  templateUrl: "coolFood/coolFood.html",
  controller: function() {
    this.firstName = "";
    this.lastName = "";
    this.favFood = "";
    this.opinion = "";

    this.updateScreen = function() {
      this.opinion = true;
    }
  }
})
