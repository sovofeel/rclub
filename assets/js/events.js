$(document).ready(function() {
    
     function initStikySidebar () {
        var $sidebar = $('.js-sidebar'),
            vh80 = $(window).height() / 100 * 90,
            $mainJS, winPos, slideHeight;

        function refreshVar() {
            $mainJS = $('.main-js');
            mainJSOffset = $mainJS.offset().left + 30;
            slideHeight = $('.fotorama').height();
        }

        refreshVar();
        $(window).resize(refreshVar);
        $(window).scroll(function() {
            winPos = $(window).scrollTop();

            if (winPos >= vh80) {
                $sidebar.addClass('fixed');
                $sidebar.css('right', mainJSOffset)
            } else {
                $('.js-sidebar').removeClass('fixed ');
                $sidebar.css('right', 0)
            }
        });

    };

    if ($(window).width() > 500) {
        initStikySidebar();
    }






});