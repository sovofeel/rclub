$(document).ready(function() {
  var heightForFixHeader = $('header').offset().top + $('header').outerHeight();

    $(window).scroll(function (event) {
        if( $(window).scrollTop() > $('.contact').offset().top && 
        !($('.contact').hasClass('fixed'))){
            $('.contact').addClass('fixed');
        };

        if( $(window).scrollTop() == 0 && 
        ($('.contact').hasClass('fixed'))){
            $('.contact').removeClass('fixed');
        };


       //  var headroom  = new Headroom(document.querySelector("header"));
            

       //  if($(window).scrollTop() > heightForFixHeader)   {
                // $("header").addClass('headroom--pinned');
                // headroom.init();
       //  } else{
       //   $("header").removeClass('headroom--pinned');
       //   headroom.destroy();
       //  };

        // if( $(window).scrollTop() > $('.gallery').offset().top - $('.gallery').innerHeight()){
        //     $('.gallery').addClass('show_slide3');
        //     setTimeout(function(){
        //         $('.gallery').addClass('color_slide3');
        //     }, 1500);
        // };

        // if( $(window).scrollTop() > $('.gallery').offset().top - $('.gallery').innerHeight()/2){
        //     $('.gallery').addClass('show_slide2');
        //     setTimeout(function(){
        //         $('.gallery').addClass('color_slide2');
        //     }, 1500);
        // };

        // if( $(window).scrollTop() > $('.gallery').offset().top){
        //     $('.gallery').addClass('show_slide1');
        //     setTimeout(function(){
        //         $('.gallery').addClass('color_slide1');
        //     }, 1500);
        // }
    });

    $(".hover_part").mouseover(function() {
        var slideIndex = $(this).closest('.hover_part').index('.hover_part') + 1;
        $('#slider').removeClass();
        $('#slider').addClass('active' + slideIndex);
    });

});
