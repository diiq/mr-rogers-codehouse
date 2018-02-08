$(document).ready(function() {
  // Default State
  $(".pop-up").hide();

  $(".table").click(function() {
    $(".pop-up").slideDown();
  });

  $("#save").click(function() {
    reserve(table);
    $(".pop-up").slideUp();
  });

  $("#cancel").click(function() {
    $(".pop-up").slideUp();
  });
});
