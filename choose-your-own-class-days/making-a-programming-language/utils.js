// Take a classname and a list of elements, and return those elements wrapped in
// a div with that class name.
function makeWrapper(klass, contents) {
  const wrapper = document.createElement("div");
  wrapper.className = klass;
  contents.map(x => wrapper.appendChild(x));
  return wrapper;
}
