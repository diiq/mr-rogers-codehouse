angular.module("budgetBuddy").component("percentageBar", {
  templateUrl: "percentage-bar/percentage-bar.html",
  bindings: {
    value: "<",
    maxValue: "<"
  },
  controller: function() {
    this.$onInit = function() {
      this.value = parseFloat(this.value);
      this.maxValue = parseFloat(this.maxValue);
    }

    this.colorClass = function() {
      if (this.percent() > 50) {
        return 'ok';
      } else if (this.percent() > 10) {
        return 'warn';
      } else {
        return 'danger';
      }
    }

    this.percent = function() {
      return Math.round(100 * (this.value / this.maxValue));
    }
  }
});
