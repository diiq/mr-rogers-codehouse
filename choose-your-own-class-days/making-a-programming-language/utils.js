function makeWrapper(klass, contents) {
  const wrapper = document.createElement("div");
  wrapper.className = klass;
  contents.map(x => wrapper.appendChild(x));
  return wrapper;
}
