// Front-end logic



// UI logic

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    let nameInput = $("input#name").val();
    console.log(nameInput);

    $(".name").text(nameInput);
    
    $("#output").show();
  });
});
