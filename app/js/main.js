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
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
