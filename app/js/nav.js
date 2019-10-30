// open menu
console.log('Hello from navigation!!!!!!');

$('.wrapper').css("color", "green");

$('.nav').addClass('open');
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
