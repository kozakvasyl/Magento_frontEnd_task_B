// open menu
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
