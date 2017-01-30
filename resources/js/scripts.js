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
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--who-we-are').offset().top}, 1000);
    });
    
    /* Scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                alert("Target");
                if (target.length) {
                    if (target=='#who-we-are'){
                        $('html, body').animate({scrollTop: target.offset().top}, 920);
                    }else{
                        $('html, body').animate({scrollTop: target.offset().top}, 1000);
                    }
                        
                    
                    return false;
                }
            }
        });
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
