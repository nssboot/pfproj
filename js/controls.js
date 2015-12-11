$(document).ready(function() {
  $(".btn-danger").on("click", function() {
    if($(this).attr("data-state") === "off") {
      $(this)
        .attr("data-state", "on")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .html("GAME ON");

      $(".btn-info").off("click");
    } else {
      $(this)
        .attr("data-state", "off")
        .removeClass("btn-success")
        .addClass("btn-danger")
        .html("GAME OFF");

      bindControls();
    }
  });

  function bindControls() {
    $(".btn-info").on("click", function() {
      alert("I got clicked");
    });    
  }

  bindControls();
});