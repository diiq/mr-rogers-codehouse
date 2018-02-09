$(document).ready(function() {

  // DEFAULT
  $(".pop-up").hide();

  // CLICK CANCEL
  $("#cancel").click(function() {
    $(".pop-up").slideUp();
  });

  // CLICK CLEAR
  $("#clear").click(function() {
    tables[tableIndex] = new Table(tableIndex);
    $(`.table:nth-child(${tableIndex + 1})`).css("background-color", "rgb(241, 217, 188)");
    $(".pop-up").slideUp();
  });
});
