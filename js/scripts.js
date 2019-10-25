// Front-end logic



// UI logic

$(document).ready(function() {

  $("input:radio[name=fun]").click(function() {

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
  });

  $("input:radio[name=platform]").click(function() {

    let platformInput = $("input:radio[name=platform]:checked").val();
    console.log(platformInput);

    if (platformInput === "web") {
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
    let platformInput = $("input:radio[name=platform]:checked").val();
    console.log(logicInput);
    console.log(softwareInput);
    console.log(platformInput);

    if (nameInput != "") {
      $("#output").show();
      $(".name").text(nameInput);
    } else {
      alert("Please enter your name.");
    };

    if (logicInput === "complex" && platformInput === "web") {
      $(".language").text("Ruby")
    } else if (logicInput === "simple" && platformInput === "web") {
      $(".language").text("Python")
    } else if (platformInput === "mobile" && softwareInput === "android") {
      $(".language").text("C#")
    } else if (platformInput === "mobile" && softwareInput === "ios") {
      $(".language").text("Swift")
    } else {
      console.log("Shit.");
    };

  });
});
