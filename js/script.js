// menu
  $(".hamburger_btn").click(function () {
    $(".header_nav").addClass("header_mobile_nav_active")
    $(".black_overlay").fadeIn();
  });

  $(".close_btn").click(function () {
    $(".header_nav").removeClass("header_mobile_nav_active")
    $(".black_overlay").fadeOut();
  });

  $(".black_overlay").click(function () {
    $(".header_nav").removeClass('header_mobile_nav_active');
    $(".black_overlay").fadeOut();
  });