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
// nav nover ---------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("close").style.top = "0";
  } else {
    document.getElementById("close").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

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

//scroll-------------------------------

$(function(){

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
     var target = $(this).attr('href'),
      bl_top = $(target).offset().top;
     $('body, html').animate({scrollTop:bl_top}, 1000);
     return false;
    })
   });

//slick deals--------------------------------
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
//slick brands -----------------------------------------
$(document).ready(function(){
    $('.join-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      variableWidth: true,
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true
    });
  });
