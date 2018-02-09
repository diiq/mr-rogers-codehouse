$(document).ready(function() {

  // DEFAULT
  $(".pop-up").hide();

  // CLICK SAVE
  $("#save").click(function() {
    // Checks that all fields are filled before saving.
    if ($("#name").val() === "" || $("#phone-number").val() === "" || $("#party-size").val() === "") {
      $(".requirements").show();
    } else {
      var name = $('#name').val();
      var phoneNumber = $('#phone-number').val();
      var partySize = $('#party-size').val();
      tables[tableIndex] = (new Party(name, phoneNumber, partySize));

      $(`.table:nth-child(${tableIndex + 1})`).css("background-color", "rgb(153, 132, 106)");
      $(".pop-up").slideUp();
    }
  });

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
