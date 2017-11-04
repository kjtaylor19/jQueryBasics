$(document).ready(function() {


  $(".p1").hide();


  $(".box2").animate({
    opacity: 1,
    width: 100
  }, 4000);

  $(".box3").animate({
    opacity: 4,
    width: 100
  }, 4000);

  $(".p2").fadeOut(4000);
  $(".p2").fadeIn(4000);


  $(".island").fadeIn(4000);


  $(".cartoon").fadeOut(4000);


  $(".p3").slideUp(4000);
  $(".p3").slideDown(4000);

  $(".p4").hide();
  $(".p4").show();



  console.log($(".box2").css("background-color"));

  $(".box2").css("background-color", "royalblue");

  console.log($(".box3").css("background-color"));

});
