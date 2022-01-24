export let brandsSlider = $(document).ready(function () {
  $(".brands__items").slick({
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
