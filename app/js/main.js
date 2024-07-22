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

  $('.programm__inner').each(function () {
    let ths = $(this);
    ths.find('.programm__item').not(':first').hide();
    ths.find('.programm__tab').click(function () {
      ths.find('.programm__tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.programm__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });
})


var swiper = new Swiper('.programm__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    replaceState: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.review__slider', {
  slidesPerView: 1,
  spaceBetween: 200,
  loop: true,
  navigation: {
    replaceState: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


  /*start play video===========*/
  document.addEventListener("DOMContentLoaded", function() {
    const videoInnerElements = document.querySelectorAll(".video__inner");
    const programmTabElements = document.querySelectorAll(".programm__tab");
  
    videoInnerElements.forEach(function(videoInner) {
      videoInner.addEventListener("click", function() {
        videoInner.classList.add("play");
  
        const videoIframe = videoInner.querySelector(".video__bg");
        const videoSrc = videoIframe.getAttribute("src");
        videoIframe.setAttribute("src", videoSrc + "?autoplay=1");
      });
    });
  
    programmTabElements.forEach(function(tab) {
      tab.addEventListener("click", function() {
        if (!tab.classList.contains("active")) {
          videoInnerElements.forEach(function(videoInner) {
            videoInner.classList.remove("play");
  
            const videoIframe = videoInner.querySelector(".video__bg");
            const videoSrc = videoIframe.getAttribute("src");
  
            // Remove ?autoplay=1 if present
            const newSrc = videoSrc.replace("?autoplay=1", "").replace("&autoplay=1", "");
            videoIframe.setAttribute("src", newSrc);
          });
        }
      });
    });
  });
  
  /*end play video===========*/