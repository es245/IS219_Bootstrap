var distance = $('#wrapper').offset().top,
$window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
      $('.top-nav').css('visibility', 'visible');
    }

    if ( $window.scrollTop() <= distance ) {
      $('.top-nav').css('visibility', 'hidden');
    }
});

var h = window.screen.availHeight;
$('.main').css('height', h);

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
