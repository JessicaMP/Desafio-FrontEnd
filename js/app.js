$(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: false,
    speed: 500,
  });

$(".slider-customers").slick({
  // normal options...
  infinite: false,
  autoplay: true,
  autoplaySpeed: 2000,
  // the magic
  responsive: [{

    breakpoint: 1440,
    settings: {
      slidesToShow: 4,
      infinite: true
    }

  },{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});