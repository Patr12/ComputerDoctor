$(document).ready(function () {
  $('.content-slider').slick({
    dots: true,    
    speed: 100,
    ade: true,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  })
})
