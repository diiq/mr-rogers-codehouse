const myRestaurant = new Restaurant(3, 5);

// A single, global, "rerender everything" function that I can call whenever stuff changes.
function renderAll() {
  const container = $("#restaurant-container");
  container.empty();
  container.append(myRestaurant.render());
}

// Render once on page load:
$(() =>  {
  // Using .hide() to hide the modal lets jquery know I'd like it to be display:
  // flex when it is show()ed (whatever display value it has before it's hidden is
  // restored)
  $("#modal").hide();
  renderAll();
});
