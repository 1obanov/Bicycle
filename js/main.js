/*--------- Twitter Slider ---------*/
$(document).ready(function () {
    $('.twitter').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

/*--------- Mobile menu ---------*/
$(".hamburger, .mobile-menu__item a").on("click", function (e) {
    e.preventDefault();

    $(".hamburger").toggleClass("is-active");
    $(".mobile-menu").toggleClass("mobile");
    $(".mobile-menu__nav").toggleClass("show");
});

/*--------- Menu Scroller ---------*/
$(".scroller").on("click", function () {
    "use strict";
    var the_id = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(the_id).offset().top + 1
      },
      "slow"
    );
    return false;
  });
