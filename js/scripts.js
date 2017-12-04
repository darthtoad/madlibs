$(document).ready(function() {
  $("#libOne").submit(function(event) {

    var inputs = ["verb1", "noun1", "room", "adjective1", "noun2", "verb2", "verb-ed", "verb-ed2", "noun3", "verb4"];

    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
    });

    $("#story").toggle();

    event.preventDefault();
  });
});
