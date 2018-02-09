class Table {
  constructor(id, posX, posY) {
    this.id = id;
    this.posX = posX;
    this.posY = posY;
    this.party = null;
  }

  reserveTable(name, size, contact) {
    this.party = new Party(name, size, contact);
    renderAll();
  }

  unreserveTable() {
    this.party = null;
    renderAll();
  }

  reserved() {
    return !!this.party;
  }

  render() {
    const table = $(`
    <button class="table ${this.availableClass()}" 
        style="grid-column: ${this.posX} / span 1; grid-row: ${this.posY} / span 1;">
      <div class="table-id">${this.id}</div>
    </button>`)
    table.click(() => this.showForm());
    return table;
  }

  availableClass() {
    if (this.party) {
     return "unavailable";
    } else {
      return "available";
    }
  }

  hideForm() {
    $("#modal").empty().hide();
  }

  showForm() {
    const parent = $("#modal")
    const formContainer = $(`<div class="reservation-form"></div>`);
    if (this.reserved()) {
      formContainer.append(this.party.render());
    } else {
      formContainer.append(this.form());
    }
    formContainer.append(this.formButtons());
    parent.append(formContainer)
    parent.show();
  }

  form() {
    // This is pretty silly and for an app this small, this lone form could
    // totally live in the HTML; but I want custom buttons, and I'm imagining a
    // world with many different modals, so.
    return $(`<form>
        <h2>Table ${this.id}</h2>
        <label>Reserver Name:
          <input type="text" id="party-name-input">
        </label>
        <label>Party size:
          <input type="text" id="party-size-input">
        </label>
        <label>Contact info:
          <input type="text" id="party-contact-input">
        </label>
      </form>`);
  }

  formButtons() {
    const buttons = $('<div class="reservation-buttons"></div>');
    buttons.append(this.formCancelButton());
    if (this.reserved()) {
      buttons.append(this.formClearButton());
    } else {
      buttons.append(this.formSaveButton());
    }
    return buttons;
  }

  formSaveButton() {
    // Save button reserves the table using the inputs
    const button = $(`<button class="save">Save</button>`);
    button.click(() => {
      this.reserveTable(
        $("#party-name-input").val(),
        $("#party-size-input").val(),
        $("#party-contact-input").val());
      this.hideForm();
    });
    return button;
  }

  formCancelButton() {
    // Cancel button just hides the form.
    const button = $(`<button class="cancel">Cancel</button>`);
    button.click(() => {
      this.hideForm();
    });
    return button;
  }

  formClearButton() {
    // Clear unreserves the table.
    const button = $(`<button class="clear">Clear</button>`);
    button.click(() => {
      this.unreserveTable();
      this.hideForm();
    });
    return button;
  }
}
