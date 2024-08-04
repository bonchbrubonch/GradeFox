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
    document.querySelector("header").classList.toggle("active"); // Add this line
  });

  document.addEventListener("DOMContentLoaded", function () {
    const categoryTitles = document.querySelectorAll(".header__nav");

    categoryTitles.forEach(function (title) {
      title.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  });


  /*tabs*/
  $('.programm__inner').each(function () {
    let ths = $(this);
    ths.find('.tab__content').not(':first').hide();
    ths.find('.programm__tab').click(function () {
      ths.find('.programm__tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab__content').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.history__inner').each(function () {
    let ths = $(this);
    ths.find('.history__item').not(':first').hide();
    ths.find('.history__tab').click(function () {
      ths.find('.history__tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.history__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  /*tabs*/




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
  autoplay: true,
  autoplaySpeed: 2000,
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

$('.selection__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/alider-arrow4.svg"></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/alider-arrow1.svg"></img>',
});

$('.team__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/alider-arrow2.svg"></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/alider-arrow2.svg"></img>',
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
        centerMode: true,
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



$('.d-programm__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/alider-arrow2.svg"></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/alider-arrow2.svg"></img>',

});

/*start animation========*/
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
/*end animation========*/

//parallax
document.addEventListener("mousemove", parallax);

function parallax(event) {
  if (window.innerWidth > 992) {
    this.querySelectorAll(".modal__parallax").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth + event.pageX * position) / 90;
      const y = (window.innerHeight + event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}
