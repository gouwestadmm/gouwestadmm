$(document).ready(function() {

function showDashBoard(){
  for(var i = 1; i <= 12; i++) {
    $('#slider .metro-tiles .span'+i).each(function(){
        $(this).addClass('fadeInForward').removeClass('fadeOutback');
    });
  }
}
 
function fadeDashBoard(){
  for(var i = 1; i <= 12; i++) {
    $('#slider .metro-tiles .span'+i).addClass('fadeOutback').removeClass('fadeInForward');
  }
}


$('.more-info').each(function(){
  var $this= $(this),
      page = $this.data('page');
  $this.on('click',function(e){
    $('.project-info.'+page).addClass('openpage');
    fadeDashBoard();
  })
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

