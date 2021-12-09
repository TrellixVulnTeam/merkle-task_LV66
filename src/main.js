$(document).ready(function () {
  $(".row-eq").each(function () {
    equalColHeights($(this));
  });
  $(".product-carousel").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendArrows: $(".product-carousel"),
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
});

window.onresize = function () {
  $(".row-eq").each(function () {
    equalColHeights($(this));
  });
};

const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

function equalColHeights(ele) {
  var highestCol = 0;
  $(ele)
    .children(".col")
    .each(function () {
      $(this).css("height", "auto");
      if (highestCol < $(this).height()) {
        highestCol = $(this).height();
      }
      $(ele).children(".col").height(highestCol);
    });
}
