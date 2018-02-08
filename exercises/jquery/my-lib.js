// Teacher notes: Invent jquery, one step at a time. Propose the problem: Say,
// "it's exausting doing doc.getElementById(...).style.display = "none" just to
// hide something. I want a faster way!" 
//
// - Students should suggest a hide(elt) or a hide(id) function. Write that
//   function; 
//
// - coach them into developing a class (or a prototype, whatever suits your
//   stease) collecting many such functions; 
//
// - show how, if each method returns `this`, you can chain methods one after
//   another. 
//
// - Finally, write a factory to simplify calling `new MyLib(id)`; call the
//   factory $.
//
// You've invented jquery! Introduce real jquery as just this same idea taken
// much further.

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

// 