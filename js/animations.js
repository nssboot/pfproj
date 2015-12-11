$(document).ready(function() {
  function loopingAnimation() {
    $(".block1").fadeIn(700).delay(200).fadeOut(600);

    setTimeout(function() {
      $(".block2").fadeIn(700).delay(200).fadeOut(600);
    }, 1500);
    
  }

  setInterval(loopingAnimation, 3000);
  
});