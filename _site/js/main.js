  /* Detect Mac/PC - Being used as subpixel-antialiased rendering
on Mac Webkit.
-------------------------------------------------------------- */
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  document.body.className += " mac";
} else {
  document.body.className += " pc";
}



$("#noordpark-info").click(function(e) {
   e.preventDefault();
  $('#noordpark').addClass("openpage");
});

 $('#noordpark-close').click(function(){
    $('#noordpark').addClass('slidePageLeft')
  });


$(window).scroll(function(){
    if  ($(window).scrollTop() >= 2000){
        $('.eerste').hide('slow', function() {
        // Animation complete.
        });
    }
     else if  ($(window).scrollTop() < 2000){
        $('.eerste').show('slow', function() {
        // Animation complete.
        });
    }
});

$(window).scroll(function(){
    if  ($(window).scrollTop() <= 2050){
        $('.tweede').hide('slow', function() {
        // Animation complete.
        });
    }
     else if  ($(window).scrollTop() < 2050){
        $('.tweede').show('slow', function() {
        // Animation complete.
        });
    }

});





