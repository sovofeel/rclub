$(document).ready(function() {

    var $sidebar = $('.js-sidebar'), sidePos, winPos, sideHeight, slideHeight, sideOffsetRight, vh80;



    function refreshVar() {
        vh80 = $(window).height() / 100 * 90;
        slideHeight = $('.fotorama').height();
        sidePos = $sidebar.offset().top + $(window).height() + vh80;
        sideHeight = $sidebar.outerHeight(true);
        sideOffsetRight = $(window).width() - $sidebar.offset().left - $sidebar.outerWidth();

    }

    refreshVar();
    $(window).resize(refreshVar);
    $(window).scroll(function() {
        winPos = $(window).scrollTop();

        console.log(winPos);


        if (winPos >= vh80) {
            $sidebar.addClass('fixed');
            $sidebar.css('right', sideOffsetRight)
        }
        else {
            $('.js-sidebar').removeClass('fixed ');
            $sidebar.css('right', 0)
        }
    });

});