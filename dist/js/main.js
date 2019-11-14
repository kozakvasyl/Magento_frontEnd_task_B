// nav--------------------------------
$('.nav-icon').click( function() {
    $(this).parent().toggleClass( function() {
        if ( $(this).hasClass('open') ) {
            return 'close';
        } else 
        if ( $(this).hasClass('close') ) {
            return 'open';
        }
    });
});

//searsh-block icon hidden------------
$('#searsh').on('keyup', function() {
    var input = $(this);
    console.log($(this));
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});

//slick--------------------------------
$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    mobileFirst: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });
});
