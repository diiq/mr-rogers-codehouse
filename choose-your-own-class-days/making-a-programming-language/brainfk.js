var tape = new Array(100).fill(0);
var activeCell = 0;

function parse(input) {
  return input;
}

function execute(input) {
  var output = "";
  const command = parse(input);
  return output || "\u2026";
}
