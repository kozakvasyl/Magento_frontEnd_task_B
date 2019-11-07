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
    slidesToScroll: 2,
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
$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 460,
    gutter: 20
  }
});
$('.work-meniu li').click(function() {
  $('.work-meniu li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.grid').isotope({
    filter: selector
  });
  return false;
});

var description = $('.description');
$('.grid-item').each(function() {
  var classNames = $(this).attr('class').split(' ');
  classNames.shift();
  console.log(classNames.join('/'));
  
  description.text(classNames.join('/'));
});

/* $('.description').each(function() {
var classNames = $('.grid-item').attr('class').split(' ');
classNames.shift();
  console.log(classNames.join('/'));
  $(this).text(classNames.join('/'));
}); */

//GOOGLE MAP----------------------------------------
var map;
function initMap() {
  var opt = {
    center: {lat: 51.765658, lng: 25.504076},
    zoom: 14,
    mapTypeId: 'satellite'
  };
  map = new google.maps.Map(document.getElementById('map'), opt);
}
