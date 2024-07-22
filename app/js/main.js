$(function () {
  /*start header====*/
  $(window).scroll(function () {
    var header = $("header");
    if ($(this).scrollTop() > 0) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
  /*end header====*/




})
