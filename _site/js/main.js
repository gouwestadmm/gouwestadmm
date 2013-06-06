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

// Smooth scrolling css tricks
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


/* CONTACT FORM 
***************************************************************************************************/

$(function(){

  //set global variables and cache DOM elements for reuse later
  var form = $('#contact-form').find('form'),
    formElements = form.find('input[type!="submit"],textarea'),
    formSubmitButton = form.find('[type="submit"]'),
    errorNotice = $('#errors'),
    successNotice = $('#success'),
    loading = $('#loading'),
    errorMessages = {
      required: ' is a required field',
      email: 'You have not entered a valid email address for the field: ',
      minlength: ' must be greater than '
    }
  
  //feature detection + polyfills
  formElements.each(function(){

    //if HTML5 input placeholder attribute is not supported
    if(!Modernizr.input.placeholder){
      var placeholderText = this.getAttribute('placeholder');
      if(placeholderText){
        $(this)
          .addClass('placeholder-text')
          .val(placeholderText)
          .bind('focus',function(){
            if(this.value == placeholderText){
              $(this)
                .val('')
                .removeClass('placeholder-text');
            }
          })
          .bind('blur',function(){
            if(this.value == ''){
              $(this)
                .val(placeholderText)
                .addClass('placeholder-text');
            }
          });
      }
    }
    
    //if HTML5 input autofocus attribute is not supported
    if(!Modernizr.input.autofocus){
      if(this.getAttribute('autofocus')) this.focus();
    }
    
  });
  
  //to ensure compatibility with HTML5 forms, we have to validate the form on submit button click event rather than form submit event. 
  //An invalid html5 form element will not trigger a form submit.
  formSubmitButton.bind('click',function(){
    var formok = true,
      errors = [];
      
    formElements.each(function(){
      var name = this.name,
        nameUC = name.ucfirst(),
        value = this.value,
        placeholderText = this.getAttribute('placeholder'),
        type = this.getAttribute('type'), //get type old school way
        isRequired = this.getAttribute('required'),
        minLength = this.getAttribute('data-minlength');
      
      //if HTML5 formfields are supported     
      if( (this.validity) && !this.validity.valid ){
        formok = false;
        
        console.log(this.validity);
        
        //if there is a value missing
        if(this.validity.valueMissing){
          errors.push(nameUC + errorMessages.required); 
        }
        //if this is an email input and it is not valid
        else if(this.validity.typeMismatch && type == 'email'){
          errors.push(errorMessages.email + nameUC);
        }
        
        this.focus(); //safari does not focus element an invalid element
        return false;
      }
      
      //if this is a required element
      if(isRequired){ 
        //if HTML5 input required attribute is not supported
        if(!Modernizr.input.required){
          if(value == placeholderText){
            this.focus();
            formok = false;
            errors.push(nameUC + errorMessages.required);
            return false;
          }
        }
      }

      //if HTML5 input email input is not supported
      if(type == 'email'){  
        if(!Modernizr.inputtypes.email){ 
          var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
          if( !emailRegEx.test(value) ){  
            this.focus();
            formok = false;
            errors.push(errorMessages.email + nameUC);
            return false;
          }
        }
      }
      
      //check minimum lengths
      if(minLength){
        if( value.length < parseInt(minLength) ){
          this.focus();
          formok = false;
          errors.push(nameUC + errorMessages.minlength + minLength + ' charcters');
          return false;
        }
      }
    });
    
    //if form is not valid
    if(!formok){
      
      //animate required field notice
      $('#req-field-desc')
        .stop()
        .animate({
          marginLeft: '+=' + 5
        },150,function(){
          $(this).animate({
            marginLeft: '-=' + 5
          },150);
        });
      
      //show error message 
      showNotice('error',errors);
      
    }
    //if form is valid
    else {
      loading.show();
      $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: form.serialize(),
        success: function(){
          showNotice('success');
          form.get(0).reset();
          loading.hide();
        }
      });
    }
    
    return false; //this stops submission off the form and also stops browsers showing default error messages
    
  });

  //other misc functions
  function showNotice(type,data)
  {
    if(type == 'error'){
      successNotice.hide();
      errorNotice.find("li[id!='info']").remove();
      for(x in data){
        errorNotice.append('<li>'+data[x]+'</li>'); 
      }
      errorNotice.show();
    }
    else {
      errorNotice.hide();
      successNotice.show(); 
    }
  }
  
  String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
});


/* End CONTACT FORM 
***************************************************************************************************/



