// nav--------------------------------
$('.bt-nav').click( function() {
    $(this).parent().toggleClass( function() {
        if ( $(this).hasClass('open')) {
        return 'close';
        } else 
        if ( $(this).hasClass('close')) {
        return 'open';
      }
    });
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

//isotope-------------------------------
$('.work-items').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
$('.work-meniu li').click(function() {
  $('.work-meniu li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.work-items').isotope({
    filter: selector
  });
  return false;
});

