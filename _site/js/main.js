  /* Detect Mac/PC - Being used as subpixel-antialiased rendering
on Mac Webkit.
-------------------------------------------------------------- */
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  document.body.className += " mac";
} else {
  document.body.className += " pc";
}


/* Orientation Scale Bug Fix for iOS
from: http://adactio.com/journal/4470/
-------------------------------------------------------------- */
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}


/* Smooth scroll for anchor links | CSS Tricks 
-------------------------------------------------------------- */

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});




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





