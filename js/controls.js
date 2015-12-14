$(document).ready(function() {
  $(".btn-danger").on("click", function() {
    if($(this).attr("data-state") === "off") {
      $(this)
        .attr("data-state", "on")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .html("GAME ON");

      $(".btn-info")
        .toggleClass("bounce")
        .off();
    } else {
      $(this)
        .attr("data-state", "off")
        .removeClass("btn-success")
        .addClass("btn-danger")
        .html("GAME OFF");

      $(".btn-info").toggleClass("bounce");

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
      $(this).toggleClass("bigEntrance");
    }).on("mouseout", function() {
      $(this).toggleClass("bigEntrance");
    });
  }

  bindControls();
  enableAnimations();
});