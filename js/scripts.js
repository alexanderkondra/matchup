$(document).ready(function() {
  $("#form").submit(function(event) {
  var goodDate = parseInt($("#goodDate").val());
  var favMovie = parseInt($("#favMovie").val());
  var favPasttime = parseInt($("#favPasttime").val());
  var favColor = parseInt($("#favColor").val());
  var gender = parseInt($("#gender").val());

  var total = goodDate + favMovie + favPasttime + favColor + gender;

  if (total <=4) {
      $(".baggins").show();
    }
    else if (total <=16)  {
      $(".ariel").show();

    } else if (total <=44) {
      $(".darko").show();

    } else {
      $(".nomatch").show();
    }

    event.preventDefault();
  });
});
