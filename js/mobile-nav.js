
$(document).ready(function () {


/*Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');        
        nav.slideToggle(200);    
    })
    
    $(window).resize(function(){
       if ($(window).width() > 767)
       {
          $('nav ul').css("display", "inline-block");
       }  
       
    });
    
    
    
});