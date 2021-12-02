

$(document).ready(function(){
    $('.product-carousel').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $('.product-carousel'),
        dots: true,
    });
  });

  const accordion = document.getElementsByClassName('container');

  for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
  };