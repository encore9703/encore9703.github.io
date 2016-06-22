$(document).ready(function () {
    
    /* Sticky Navigation */
    $('.js--who-we-are').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
            $('hero').addClass('gone');
            $('button').addClass('gone');
        } else {
            $('nav').removeClass('sticky');
            $('hero').removeClass('gone');
            $('button').removeClass('gone');
        }
    }, {
        offset: '60px;'
    });
    
    /* Scroll */
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--who-we-are').offset().top}, 1000);
    });
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({scrollTop: target.offset().top}, 1000);
                    return false;
                }
            }
        });
    });
    
});