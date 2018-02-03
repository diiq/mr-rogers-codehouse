// An interpreter is a program that runs other programs! Out intepreter
// currently takes programs and outputs nothing. But we'll fix that!

class Interpreter {
  constructor() {
    this.tape = new Tape();
  }

  parse(input) {
    // TODO: Turn the program from a string into something more useful
    return input;
  }

  evaluate(input) {
    const command = this.parse(input);
    // TODO do what the program tells us to do and return the output
    return "";
  }

  reset() {
    this.tape.reset();
  }
}