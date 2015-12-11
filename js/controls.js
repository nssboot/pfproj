$(document).ready(function() {
  $(".btn-danger").on("click", function() {
    if($(this).attr("data-state") === "off") {
      $(this)
        .attr("data-state", "on")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .html("GAME ON");

      $(".btn-info").off();
    } else {
      $(this)
        .attr("data-state", "off")
        .removeClass("btn-success")
        .addClass("btn-danger")
        .html("GAME OFF");

      bindControls();
      enableAnimations();
    }
  });

  function bindControls() {
    $(".btn-info").on("click", function() {
      alert("I got clicked");
    });    
  }

  var enableAnimations = function() {
    $(".btn-info").on("mouseover", function() {
      $(this).toggleClass("btn-default btn-info");
    }).on("mouseout", function() {
      $(this).toggleClass("btn-default btn-info");
    });
  }

  bindControls();
  enableAnimations();
});