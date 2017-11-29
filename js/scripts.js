$(document).ready(function() {
  $("#libOne").submit(function(event) {

    var verb1Input = $("input#verb1").val();
    var noun1Input = $("input#noun1").val();
    var roomInput = $("input#room").val();
    var adjective1Input = $("input#adjective1").val();
    var noun2Input = $("input#noun2").val();
    var verb2Input = $("input#verb2").val();
    var verbedInput = $("input#verb-ed").val();
    var verbed2Input = $("input#verb-ed2").val();
    var noun3Input = $("input#noun3").val();
    var verb4Input = $("input#verb4").val();

    $(".verb1").text(verb1Input);
    $(".noun1").text(noun1Input);
    $(".room").text(roomInput);
    $(".adjective1").text(adjective1Input);
    $(".noun2").text(noun2Input);
    $(".verb2").text(verb2Input);
    $(".verb-ed").text(verbedInput);
    $(".verb-ed2").text(verbed2Input);
    $(".noun3").text(noun3Input);
    $(".verb4").text(verb4Input);

    $("#story").toggle();

    event.preventDefault();
  });
});
