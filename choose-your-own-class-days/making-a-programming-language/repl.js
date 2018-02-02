class REPL { 
  constructor(tape) {
    this.tape = new Tape(tape);
  }

  makeLeftChevron() {
    const chevron = document.createElement("div");
    chevron.innerHTML = "&#x276f; ";
    chevron.className = "chevron";
    return chevron;
  }

  makeRightChevron() {
    const chevron = document.createElement("div");
    chevron.innerHTML = "&#x276e; ";
    chevron.className = "chevron output-chevron";
    return chevron;
  }

  makeHistoryPrompt(command) {
    return makeWrapper("history-prompt", [
      document.createTextNode(command || "\u2026"), 
      this.makeLeftChevron()
    ]);
  }

  makeHistoryOutput(output) {
    return makeWrapper("history-output", [
      document.createTextNode(output), 
      this.makeRightChevron()
    ]);
  }

  makeHistoryItem(command, output) {
    return makeWrapper("history-item", [
      this.makeHistoryPrompt(command),
      this.makeHistoryOutput(output)
    ]);
  }

  addHistoryItem(command, output) {
    document.getElementById("history").appendChild(
      this.makeHistoryItem(command, output)
    );
  }

  evaluate(command) {
    return execute(command);
  }

  print(command, output) {
    this.addHistoryItem(command, output);
  }

  clear() {
    return document.getElementById("repl-input").value = "";
  }

  scrollToBottom() {
    document.getElementById("history").scrollTop = 10000;
  }

  firstLine(command) {
    const lines = command.split("\n");
    const line = command.split("\n")[0];
    if (lines.length > 1) {
      return line + "\u2026";
    }
    return line;
  }

  go(command) {
    this.print(this.firstLine(command), this.evaluate(command));
    this.tape.show(activeCell);
    this.clear();
    this.scrollToBottom();
  }

  // Just for initial display.
  show() {
    // Still using a global activeCell, not excited about that
    this.tape.show(activeCell);
    console.log(activeCell);
  }
}

function readLine() {
  return document.getElementById("repl-input").value;
}

function readProgram() {
  return document.getElementById("program-input").value;
}

window.addEventListener("load", () => {
  const repl = new REPL(tape);
  repl.show();

  document.getElementById("repl-input").addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      repl.go(readLine());
    }
  })

  document.getElementById("execute-program").addEventListener("click", (e) => {
    repl.go(readProgram());
  });
})