class MyLib {
  constructor(id) {
    this.elt = document.getElementById(id);
  }

  hide() {
    this.elt.style.display = "none";
    return this;
  }

  show() {
    this.elt.style.display = "block";
    return this;
  }

  redBorderize() {
    this.elt.style.border = "1px solid red";
    return this;
  }

  unBorderize() {
    this.elt.style.border = "none";
    return this;
  }
}

function $(id) {
  return new MyLib(id);
}
