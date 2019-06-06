$(document).ready(function() {
  $("#form").submit(function(event) {
  var goodDate = parseInt($("#goodDate").val());
  var favMovie = parseInt($("#favMovie").val());
  var favPasttime = parseInt($("#favPasttime").val());
  var favColor = parseInt($("#favColor").val());

  var total = goodDate + favMovie + favPasttime + favColor;
  if (total <=4) {
      $(".baggins").show();
    } else if (total <=8)  {
      $(".ariel").show();
    } else if (total <=12) {
      $(".darko").show();
    } else {
      $(".nomatch").show();
    }
    event.preventDefault();
  });
});
