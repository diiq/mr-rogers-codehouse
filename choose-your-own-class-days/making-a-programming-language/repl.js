// REPL stands for "read, evaluate, print, loop". That means it will take some
// input (a program or a command), run that program, print the result, and
// then take some more input!

// This class is mostly concerned with *displaying* and *interacting with the
// user*. The intepreter is the bit that will turn a string into a program and
// run it.

// This is a string representation of a one-character elipsis: …
const ELIPSIS = "\u2026";

class ReplDisplay { 
  constructor(interpreter, historyElement, commandInputElement, programInputElement) {
    // An interpreter is something that has an "evaluate" method (that takes a
    // program and returns some output) and a "reset" method.
    this.interpreter = interpreter;
    this.historyElement = historyElement;
    this.commandInputElement = commandInputElement;
    this.programInputElement = programInputElement;
  }

  // These two methods are all we're going to call from the outside: run a
  // command, or run a program:

  doLine() {
    this.execute(this.readLine());
    this.clearInput();
  }

  doProgram() {
    this.interpreter.reset();
    this.execute(this.readProgram());
  }

  // From here down are helper methods

  readLine() {
    return this.commandInputElement.value;
  }
  
  readProgram() {
    return this.programInputElement.value;
  }

  execute(command) {
    this.print(this.firstLine(command), this.interpreter.evaluate(command) || ELIPSIS);
    this.scrollToBottom();
  }

  print(command, output) {
    this.addHistoryItem(command, output);
  }

  addHistoryItem(command, output) {
    document.getElementById("history").appendChild(
      this.makeHistoryItem(command, output)
    );
  }

  makeHistoryItem(command, output) {
    return makeWrapper("history-item", [
      this.makeHistoryPrompt(command),
      this.makeHistoryOutput(output)
    ]);
  }

  makeHistoryPrompt(command) {
    return makeWrapper("history-prompt", [
      document.createTextNode(command || ELIPSIS), 
      this.makeLeftChevron()
    ]);
  }

  makeHistoryOutput(output) {
    return makeWrapper("history-output", [
      document.createTextNode(output), 
      this.makeRightChevron()
    ]);
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

  clearInput() {
    this.commandInputElement.value = "";
  }

  scrollToBottom() {
    this.historyElement.scrollTop = 10000;
  }

  firstLine(command) {
    const lines = command.split("\n");
    const line = command.split("\n")[0];
    if (lines.length > 1) {
      return line + ELIPSIS + " (" + lines.length + " lines)";
    }
    return line;
  }
}