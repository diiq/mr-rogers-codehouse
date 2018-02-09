$(document).ready(function() {

  // Default State
  $(".pop-up").hide();

  $("#cancel").click(function() {
    $(".pop-up").slideUp();
  });
});
