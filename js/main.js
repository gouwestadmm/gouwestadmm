$(document).ready(function() {

// Show the nav fullscreen
$("#nav-btn").click(function (e) {
   e.preventDefault();
  $("#full-nav").toggleClass("visible");
  $("#nav-btn").toggleClass("closing");
});

// Show and hide hidden story's
$("#story-open").click(function (e) {
   e.preventDefault();
  $("#hidden-story").toggle("slow");
  $("#story-close").toggle("slow");
});



$('.close-button').click(function(e){
  $(this).parents('.project-info').addClass('slidePageLeft')
  //this function will detect the end of the animation, and remove the classes added before
  //so that the page will get back to its initial position after it has been closed
        .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
              $(this).removeClass('slidePageLeft').removeClass('openpage');
            });
    showDashBoard();
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

});

