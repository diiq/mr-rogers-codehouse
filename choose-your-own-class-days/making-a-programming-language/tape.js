function makeCell(content, active) {
  return makeWrapper("cell" + (active ? " active" : ""), [
    document.createTextNode(content)
  ]);
}

function makeTape(tape, activeCell) {
  return makeWrapper("tape",
    tape.map((c, i) => makeCell(c, i == activeCell))
  );
}

function clearTape() {
  document.getElementById("tape").innerHTML = "";
}

function showTape(tape, activeCell) {
  clearTape();
  document.getElementById("tape")
    .appendChild(makeTape(tape, activeCell));
}
