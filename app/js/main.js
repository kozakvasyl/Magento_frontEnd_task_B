// nav--------------------------------
$(document).ready(function() {
    $(document).delegate('.nav', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.nav').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.nav').removeClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function(event) {
        $('.nav-item').removeClass('oppenned');
    })
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
