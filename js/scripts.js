// Front-end logic



// UI logic

$(document).ready(function() {

  $("input:radio").click(function() {
    
    let stop = $("input:radio[name=fun]:checked").val();
    console.log(stop);

    if (stop === "no") {
      $("#primary-questions").hide();
      $("button").hide();
      $("#try-again").show();
    } else {
      $("#primary-questions").show();
      $("button").show();
      $("#try-again").hide();
    };

    let remove = $("input:radio[name=platform]:checked").val();
    console.log(remove);

    if (remove === "web") {
      $("#secondary-questions").hide();
    } else {
      $("#secondary-questions").show();
    };

  });

  $("form#questions").submit(function(event) {
    event.preventDefault();

    let nameInput = $("input#name").val();

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

    if (logicInput === "complex" && softwareInput === "ios") {
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
