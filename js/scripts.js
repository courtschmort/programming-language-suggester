// Front-end logic



// UI logic

$(document).ready(function() {

  let nameInput = $("input#name").val();

  $("input:radio[name=fun]").click(function() {

    let stop = $("input:radio[name=fun]:checked").val();

    if (stop === "no") {
      $("#main-questions").hide();
      $("button").hide();
      $("#output-reconsider").show();
    } else {
      $("#main-questions").show();
      $("button").show();
      $("#output-reconsider").hide();
    }

});

  $("form#questions").submit(function(event) {
    event.preventDefault();

    let logicInput = $("input:radio[name=logic]:checked").val();
    let softwareInput = $("input:radio[name=software]:checked").val();
    console.log(logicInput);
    console.log(softwareInput);

    if (nameInput != "") {
      $("#output").show();
      $(".name").text(nameInput);
    } else {
      alert("Please enter your name.");
    };

    if (personalityInput === "no") {
      $("other-questions").hide();
      $(".language").hide();
      $("output").html("<h2>You should probably reconsider.</h2>");
    } else if (logicInput === "complex" && softwareInput === "ios") {
      $(".language").text("Swift")
    } else if (logicInput === "complex" && softwareInput === "android") {
      $(".language").text("C#")
    } else if (logicInput === "simple") {
      $(".language").text("Python")
    } else {
      console.log("Shit.");
    };

  });
});
