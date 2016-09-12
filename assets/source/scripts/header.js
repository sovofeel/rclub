$(document).ready(function() {
  if($('header').length > 0){
    var heightForFixHeader = $('header').offset().top + $('header').outerHeight();
    console.log(heightForFixHeader);
  }
  
  
    $(window).scroll(function (event) {
      if($('.contact').length > 0){
        if( $(window).scrollTop() > $('.contact').offset().top && 
        !($('.contact').hasClass('fixed'))){
            $('.contact').addClass('fixed');
        };

        if( $(window).scrollTop() == 0 && 
        ($('.contact').hasClass('fixed'))){
            $('.contact').removeClass('fixed');
        };
      }
        var headroom  = new Headroom(document.querySelector("header"));            
        if($(window).scrollTop() > heightForFixHeader)   {
            
            // headroom.init();
            // $("header").addClass('headroom--pinned');
            console.log('if');
        } else{
            // headroom.destroy();
            // $("header").removeClass('headroom--pinned');
            console.log('else');
        };

    });

    $(".hover_part").mouseover(function() {
        var slideIndex = $(this).closest('.hover_part').index('.hover_part') + 1;
        $('#slider').removeClass();
        $('#slider').addClass('active' + slideIndex);
    });

});
