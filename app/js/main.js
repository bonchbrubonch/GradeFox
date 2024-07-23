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

  /*меню гамбургер*/
  document.querySelector(".header__menu-btn").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header__nav").classList.toggle("open");
    document.body.classList.toggle("lock");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const categoryTitles = document.querySelectorAll(".header__nav");

    categoryTitles.forEach(function (title) {
      title.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  });


  $('.programm__inner').each(function () {
    let ths = $(this);
    ths.find('.programm__item').not(':first').hide();
    ths.find('.programm__tab').click(function () {
      ths.find('.programm__tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.programm__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $("dl").removeClass("open");
    $(this).parent().toggleClass("open");
  });
})



$('.programm__slider').slick({
  infinite: false,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/alider-arrow4.svg"></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/alider-arrow1.svg"></img>',
  responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
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
var swiper = new Swiper('.team__slider', {
  slidesPerView: 1,
  spaceBetween: 120,
  loop: true,
  navigation: {
    replaceState: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 120,
      slidesPerView: 3,
    },
  },
});


/*start play video===========*/
document.addEventListener("DOMContentLoaded", function () {
  const videoInnerElements = document.querySelectorAll(".video__inner");
  const programmTabElements = document.querySelectorAll(".programm__tab");

  videoInnerElements.forEach(function (videoInner) {
    videoInner.addEventListener("click", function () {
      videoInner.classList.add("play");

      const videoIframe = videoInner.querySelector(".video__bg");
      const videoSrc = videoIframe.getAttribute("src");
      videoIframe.setAttribute("src", videoSrc + "?autoplay=1");
    });
  });

  programmTabElements.forEach(function (tab) {
    tab.addEventListener("click", function () {
      if (!tab.classList.contains("active")) {
        videoInnerElements.forEach(function (videoInner) {
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