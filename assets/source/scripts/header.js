$(document).ready(function() {
    var $header = $('header');
    var $contact = $('.contact');

    if($header.length > 0){
        var heightForFixHeader = $header.offset().top  + 300;
    }
  
    $(window).scroll(function (event) {
        if($contact.length > 0){
            if( $(window).scrollTop() > $contact.offset().top && !($contact.hasClass('fixed'))){
                $contact.addClass('fixed');
            };

            if( $(window).scrollTop() == 0 && ($contact.hasClass('fixed'))) {
                $contact.removeClass('fixed');
            };
        };
        if($('.event').length > 0){
            $('.event').each(function(){
                // if($(this).hasClass('filtered')){
                //     if($(window).scrollTop() < $(this).offset().top - 300);
                //         $(this).removeClass('filtered');
                //     }   
                // }
                if($(window).scrollTop() > $(this).offset().top - 300){
                    $this_event = $(this);
                    setTimeout(function(){
                        $this_event.addClass('filtered');
                    }, 500);
                    
                };
            });
            // if($(window).scrollTop() > $('.swiper-slide').offset().top - 300){
            //     $this_event = $(this);
            //     setTimeout(function(){
            //         $this_event.addClass('filtered');
            //     }, 500);
                
            // };
        }

        // var headroom = new Headroom(document.querySelector("header"),{
        //   "offset": heightForFixHeader,
        //   "tolerance": 5
        // });            
        // headroom.init();

        // if($(window).scrollTop() < heightForFixHeader)   {
        //     if (!$header.hasClass('headroom_on_top')) {
        //         $header.addClass('headroom_on_top');
        //     }
        // } else{
        //     if ($header.hasClass('headroom_on_top')) {
        //         $header.hide();
        //         $header.addClass('headroom--unpinned');
        //         $header.removeClass('headroom_on_top');
        //         setTimeout(function(){
        //             $header.show();
        //         }, 300);
        //     }
        // };


    });

    // left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

    $(".hover_part").mouseover(function() {
        var slideIndex = $(this).closest('.hover_part').index('.hover_part') + 1;
        $('#slider').removeClass();
        $('#slider').addClass('active' + slideIndex);
    });

});
