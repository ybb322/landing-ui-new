export let reviewsSlider = $(document).ready(function () {
  $(".reviews__items").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  });
});
