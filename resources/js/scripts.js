$(document).ready(function () {
    
    /* Sticky Navigation */
    $('.js--promotions').waypoint(function (direction) {
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
    
    /* Sticky Navigation 
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
    }); */
    
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
    
    /* Modal */
    var modal = document.getElementById('myModal');

    /* Get the image and insert it inside the modal - use its "alt" text as a caption */
    var img1 = document.getElementById('firstImg');
    var img2 = document.getElementById('secondImg');
    var img3 = document.getElementById('thirdImg');
    var img4 = document.getElementById('fourthImg');
    var modalImg = document.getElementById("img01");
    img1.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    img2.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    img3.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    img4.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("modal")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
});
