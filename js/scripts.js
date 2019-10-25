// Front-end logic



// UI logic

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    let nameInput = $("input#name").val();
    console.log(nameInput);

    let subjectInput = $("input.subject").val();
    let logicInput = $("input.logic").val();
    let softwareInput = $("input.software").val();
    console.log(subjectInput);
    console.log(logicInput);
    console.log(softwareInput);

    if (nameInput != "") {
      $("#output").show();
      $(".name").text(nameInput);
    } else {
      alert("Please enter your name.");
    };

    if (softwareInput === "ios" && logicInput === "complex") {
      $(".language").text("Swift")
    } else if (softwareInput === "android" && logicInput === "complex") {
      $(".language").text("C#")
    } else if (logicInput === "simple") {
      $(".language").text("Python")
    } else {
      console.log("Shit.");
    };

  });
});
