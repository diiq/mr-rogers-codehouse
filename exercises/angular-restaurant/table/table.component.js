angular.module("codehouse").component("restaurantTable", {
  templateUrl: "table/table.html",
  bindings: {
    table: "<"
  },
  controller: function() {
    this.formShowing = false;

    this.showForm = function() {
      this.formShowing = true;
    }

    this.clearForm = function() {
      this.name = "";
      this.size = "";
      this.contact = "";
    }

    this.hideForm = function() {
      this.formShowing = false;
      this.clearForm();
    }

    this.unreserve = function() {
      this.table.unreserveTable();
      this.hideForm();
    }

    this.reserve = function() {
      this.table.reserveTable(this.name, this.size, this.contact);
      this.hideForm();
    }

    this.cancel = function() {
      this.hideForm();
    }
  }
});
