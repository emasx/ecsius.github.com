$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();

        if(scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });
});

var nav =  $('nav[role="navigation"]');

// Mobile Navigation

$('.nav-toggle').on('click',function(){
    $(this).toggleClass('close-nav');
    nav.toggleClass('open');
});

