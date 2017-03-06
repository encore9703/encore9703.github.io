$(document).ready(function () {
    
    /* Sticky Navigation With Promotions Section */
    /* $('.js--promotions').waypoint(function (direction) {
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
    }); */
    
    /* Sticky Navigation Without Promotions Section */
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
        offset: '110px;'
    });
    
    /* Scroll */
    $('.js--logo').click(function () {
        $('html, body').animate({scrollTop: $('.js--header').offset().top - 80}, 1000);
    });
    $('.js--about-us').click(function () {
        $('html, body').animate({scrollTop: $('.js--who-we-are').offset().top - 80}, 1000);
    });
    $('.js--hours-link').click(function () {
        $('html, body').animate({scrollTop: $('.js--hours').offset().top}, 1000);
    });
    $('.js--contact-link').click(function () {
        $('html, body').animate({scrollTop: $('.js--contact-us').offset().top}, 1000);
    });
    
});
