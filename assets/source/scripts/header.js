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
        
        var headroom = new Headroom(document.querySelector("header"),{
          "offset": heightForFixHeader,
          "tolerance": 5
        });            
        headroom.init();

        if($(window).scrollTop() < heightForFixHeader)   {
            if (!$header.hasClass('headroom_on_top')) {
                $header.addClass('headroom_on_top');
            }
        } else{
            if ($header.hasClass('headroom_on_top')) {
                $header.hide();
                $header.addClass('headroom--unpinned');
                $header.removeClass('headroom_on_top');
                setTimeout(function(){
                    $header.show();
                }, 300);
            }
        };

    });

    $(".hover_part").mouseover(function() {
        var slideIndex = $(this).closest('.hover_part').index('.hover_part') + 1;
        $('#slider').removeClass();
        $('#slider').addClass('active' + slideIndex);
    });

});
