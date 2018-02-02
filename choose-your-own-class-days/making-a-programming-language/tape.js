class Tape {
  constructor(tape) {
    this.tape = tape;
  }

  makeCell(content, active) {
    return makeWrapper("cell" + (active ? " active" : ""), [
      document.createTextNode(content)
    ]);
  }

  makeTape(activeCell) {
    return makeWrapper("tape",
      this.tape.map((c, i) => this.makeCell(c, i == activeCell))
    );
  }

  clear() {
    document.getElementById("tape").innerHTML = "";
  }

  show(activeCell) {
    this.clear();
    document.getElementById("tape")
      .appendChild(this.makeTape(activeCell));
  }
}