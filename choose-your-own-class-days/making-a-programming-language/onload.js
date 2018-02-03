window.addEventListener("load", () => {
  const repl = new ReplDisplay(
    new Interpreter(),
    document.getElementById("history"),
    document.getElementById("repl-input"),
    document.getElementById("program-input")
  );

  document.getElementById("repl-input").addEventListener(
    "keydown", (e) => {
      if (e.keyCode == 13) {
        repl.doLine();
      }
    }
  );

  document.getElementById("execute-program").addEventListener(
    "click", () => repl.doProgram()
  );
})