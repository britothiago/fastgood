$(document).ready(function () {

    /* NAV */
    $('.features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '80%'
    });


    /* Buttons */
    $('.jq-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-plans').offset().top
        }, 2000);
    });

    $('.jq-features').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-features').offset().top
        }, 1000);
    });

    $('.jq-logo').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-header').offset().top
        }, 2000);
    });

    $('.jq-delivery').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-delivery').offset().top
        }, 2000);
    });

    $('.jq-how').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-how').offset().top
        }, 2000);
    });

    $('.jq-talk').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-talk').offset().top
        }, 2000);
    });


    $('.jq-meals').click(function () {
        $('html, body').animate({
            scrollTop: $('.jq-section-meals').offset().top
        }, 2000);
    });


    $('.jq-como-fun').waypoint(function (direction) {
        $('.jq-como-fun').addClass('animated flash');
    }, {
        offset: '50%'
    });

    $('.box').waypoint(function (direction) {
        $('.box').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.jq-img-app').waypoint(function (direction) {
        $('.jq-img-app').addClass('animated slideInLeft');
    }, {
        offset: '50%'
    });

    $('.jq-plan-pr').waypoint(function (direction) {
        $('.jq-plan-pr').addClass('animated tada');
    }, {
        offset: '50%'
    });

    $('.jq-mobile').click(function () {
        var nav = $('.main-nav');
        nav.slideToggle(200);
    });
    
    

});
