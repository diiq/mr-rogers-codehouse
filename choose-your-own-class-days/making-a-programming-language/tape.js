// A tape is just a fancy word for an array that has one "active" element at a
// time. A program can only read and write the active element! Our tape has some
// special methods to display what it looks like to the user so they can debug
// their program.

class Tape {
  constructor() {
    this.reset();
  }

  // Here is where we'll put methods for manipulating the tape.
  // TODO: ADD SOME METHODS

  reset() { // Return the tape to pre-program conditions.
    this.tape = Array(100).fill(0);
    this.activeCellIndex = 0;
    this.refresh();
  }

  activeCell() {
    this.tape[this.activeCellIndex];
  }

  // All the methods below this point are for *displaying* the tape to the user
  // for debugging.

  makeCell(content, active) {
    return makeWrapper("cell" + (active ? " active" : ""), [
      document.createTextNode(content)
    ]);
  }

  makeTape() {
    return makeWrapper("tape",
      this.tape.map((c, i) => this.makeCell(c, i == this.activeCellIndex))
    );
  }

  clear() {
    document.getElementById("tape").innerHTML = "";
  }

  refresh() {
    this.clear();
    document.getElementById("tape")
      .appendChild(this.makeTape());
  }
}