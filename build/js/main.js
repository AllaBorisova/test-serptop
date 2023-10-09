// Fancybox.bind('[data-fancybox]', {});
jQuery(document).ready(function ($) {
  $('.tabs').lightTabs();
  $('.count__plus').click(function () {
    let count = $(this).parent().find('input').val();
    count++;
    $(this).parent().find('input').val(count);
  });
  $('.count__minus').click(function () {
    let count = $(this).parent().find('input').val();
    if (count <= 1) {
      count = 1;
    } else {
      count--;
    }
    $(this).parent().find('input').val(count);
  });

  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  // $(document).on('click', function (e) {
  //   if ($(e.target).closest('.nav-catalog').length === 0) {
  //     $('.hamburger').removeClass('is-active');
  //     $('body').removeClass('open-menu');
  //   }
  // });

  $('.catalog-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,

    autoplaySpeed: 2000,
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.product-slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider_nav',
  });
  $('.product-slider_nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-slider_for',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '',
    nextArrow: '',
    // prevArrow: '',
    // nextArrow: '',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
