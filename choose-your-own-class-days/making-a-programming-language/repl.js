function makeLeftChevron() {
  const chevron = document.createElement("div");
  chevron.innerHTML = "&#x276f; ";
  chevron.className = "chevron";
  return chevron;
}

function makeRightChevron() {
  const chevron = document.createElement("div");
  chevron.innerHTML = "&#x276e; ";
  chevron.className = "chevron output-chevron";
  return chevron;
}

function makeHistoryPrompt(command) {
  return makeWrapper("history-prompt", [
    document.createTextNode(command || "\u2026"), 
    makeLeftChevron()
  ]);
}

function makeHistoryOutput(output) {
  return makeWrapper("history-output", [
    document.createTextNode(output), 
    makeRightChevron()
  ]);
}

function makeHistoryItem(command, output) {
  return makeWrapper("history-item", [
    makeHistoryPrompt(command),
    makeHistoryOutput(output)
  ]);
}

function addHistoryItem(command, output) {
  document.getElementById("history").appendChild(
    makeHistoryItem(command, output)
  );
}

function read() {
  return document.getElementById("repl-input").value;
}

function readProgram() {
  return document.getElementById("program-input").value;
}

function evaluate(command) {
  return execute(command);
}

function print(command, output) {
  addHistoryItem(command, output);
}

function clear() {
  return document.getElementById("repl-input").value = "";
}

function scrollToBottom() {
  document.getElementById("history").scrollTop = 10000;
}

function firstLine(command) {
  const lines = command.split("\n");
  const line = command.split("\n")[0];
  if (lines.length > 1) {
    return line + "\u2026";
  }
  return line;
}

function repl(command) {
  print(firstLine(command), evaluate(command));
  showTape(tape, activeCell);
  clear();
  scrollToBottom();
}

window.addEventListener("load", () => {
  showTape(tape, activeCell);
  document.getElementById("repl-input").addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      repl(read());
    }
  })

  document.getElementById("execute-program").addEventListener("click", (e) => {
    repl(readProgram());
  });
})