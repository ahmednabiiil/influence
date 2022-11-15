$(document).ready(function () {
  // arrow animation
  $("#buttonone").click(function () {
    $("#buttonone").addClass("active");
    $("#buttonarrow").addClass("rotat");
    $("#buttonarrow").removeClass("rotattwo");
    $("#buttontwo").removeClass("active");
  });

  $("#buttontwo").click(function () {
    $("#buttontwo").addClass("active");
    $("#buttonarrow").addClass("rotattwo");
    $("#buttonarrow").removeClass("rotat");
    $("#buttonone").removeClass("active");
  });
  ///////////////////////// wow animation
  new WOW().init();

  ///////////////////////////
  const logoSlider = $(".logo-slider");
  if (logoSlider.length > 0) {
    logoSlider
      .slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        // speed: 2000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 4,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: false,
            },
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            },
          },
        ],
      })
      .slickAnimation();
  }

  // Photo Gallery
  const photoGallery = $(".photo__gallery");
  if (photoGallery.length > 0) {
    photoGallery.lightGallery({
      selector: ".photo__item",
    });
  }

  //SVG converter
  const svgConverter = function () {
    $("img.svg").each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      jQuery.get(
        imgURL,
        function (data) {
          var $svg = jQuery(data).find("svg");
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (typeof imgClass !== "undefined") {
            $svg = $svg
              .attr("class", imgClass + " replaced-svg")
              .css("display", "inline-block");
          }
          $svg = $svg.removeAttr("xmlns:a");
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  };
  svgConverter();

  $(".numCounter").counterUp({
    delay: 10,
    time: 1000,
  });

  // aroww animation
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 80) {
    $(".menu").addClass("nav-active");
  } else {
    $(".menu").removeClass("nav-active");
  }
});
