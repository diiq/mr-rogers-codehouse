angular.module("budgetBuddy").component("percentageBar", {
  templateUrl: "percentage-bar/percentage-bar.html",
  bindings: {
    value: "<",
    maxValue: "<",
    bgColor: "<"
  },
  controller: function() {
    this.$onInit = function() {
      this.value = parseFloat(this.value);
      this.maxValue = parseFloat(this.maxValue);
      this.percentWidth = this.calculatePercent();
    }

    this.calculatePercent = function() {
      return 100 * (this.value / this.maxValue);
    }
  }
});
