<?php session_start(); ?> <!-- This is needed for the form to work -->
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Gouwestad Marketing & Media | Ontwikkelen betekent vooruitgang</title>
        
        <meta name="viewport" content="width=device-width">


<!--_____  ____  _    ___          ________  _____ _______       _____  
  / ____|/ __ \| |  | \ \        / /  ____|/ ____|__   __|/\   |  __ \ 
 | |  __| |  | | |  | |\ \  /\  / /| |__  | (___    | |  /  \  | |  | |
 | | |_ | |  | | |  | | \ \/  \/ / |  __|  \___ \   | | / /\ \ | |  | |
 | |__| | |__| | |__| |  \  /\  /  | |____ ____) |  | |/ ____ \| |__| |
  \_____|\____/ \____/    \/  \/   |______|_____/   |_/_/    \_\_____/ 
                                                              
      |\/|  _. ._ |   _ _|_ o ._   _    ()    |\/|  _   _| o  _. 
      |  | (_| |  |< (/_ |_ | | | (_|   (_X   |  | (/_ (_| | (_| 
                                   _|                            
                          © www.gouwestadmm.nl
-->

    
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <link rel="stylesheet" href="http://gouwestad.com/less/style.css">

  
    <script src="http://gouwestad.com/js/vendor/Chart.js"></script>

  <!-- Fonts -->
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

  <script src="http://gouwestad.com/js/vendor/modernizr-2.6.1-respond-1.1.0.min.js"></script>


</head>


<div class="navbar navbar-fixed-top hidden-phone">
    <div class="container">
      <button data-target=".navbar-responsive-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/"><img src="http://gouwestad.com/img/logo.png"/></a>
      <div class="nav-collapse collapse navbar-responsive-collapse">
         <ul class="nav pull-right">
	          <li><a href="http://gouwestad.com">werk</a></li>
	          <li><a href="http://gouwestad.com/contact.php">contact</a></li>
	        </ul>
      </div><!-- /.nav-collapse -->
    </div><!-- /.container -->
  </div>

  <div class="navbar visible-phone">
    <div class="container">
      <button data-target=".navbar-responsive-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/"><img src="http://gouwestad.com/img/logo-mobile.png"/></a>
      <div class="nav-collapse collapse navbar-responsive-collapse">
         <ul class="nav pull-right">
            <li><a href="http://gouwestad.com">werk</a></li>
            <li><a href="http://gouwestad.com/contact.php">contact</a></li>
          </ul>
      </div><!-- /.nav-collapse -->
    </div><!-- /.container -->
  </div>

<section>
  <div class="container">
    <div class="row">
      <div class="col-span-8">
			<?php
                   //init variables
                   $cf = array();
                   $sr = false;
            
                   if(isset($_SESSION['cf_returndata'])){
                     $cf = $_SESSION['cf_returndata'];
                     $sr = true;
                   }
            ?>

            <!-- Error & succes displays above the form -->
            <div id="errors" class="alert alert-error <?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>">
                      <a class="close" data-dismiss="alert">×</a>

              <ul>
                <li id="info">Er zijn problemen met het door u ingevulde formulier:</li>

                <?php 
                        if(isset($cf['errors']) && count($cf['errors']) > 0) :
                           foreach($cf['errors'] as $error) :
                        ?>
                <li><?php echo $error ?></li>
                <?php
                           endforeach;
                          endif;
                        ?>
              </ul>
            </div>

            <div id="success" class="alert alert-success <?php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>">
                      <a class="close" data-dismiss="alert">×</a>
                <p>Bedankt voor uw bericht. U hoort z.s.m. van ons.</p>
            </div>


            <form method="post" action="process.php" class="form-horizontal">
                <legend>Contact formulier</legend>
                <fieldset>
                    <div class="control-group">
                        <label for="name" class="control-label">Uw naam: <span class="required">*</span></label>
                        <div class="controls">
                            <input type="text" id="name" name="name" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['name'] : '' ?>" placeholder="Naam" required autofocus />
                        </div>
                    </div>
                    <div class="control-group">
                        <label for="email" class="control-label">Emailadres: <span class="required">*</span></label>
                        <div class="controls">
                            <input type="email" id="email" name="email" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['email'] : '' ?>" placeholder="voorbeeld@gmail.com" required />
                        </div>
                    </div>
                    <div class="control-group">
                        <label for="telephone" class="control-label">Telefoon: </label>
                        <div class="controls">
                            <input type="tel" id="telephone" name="telephone" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['telephone'] : '' ?>" />
                        </div>
                    </div>
                    <div class="control-group">                
                        <label for="message" class="control-label">Bericht: <span class="required">*</span></label>
                        <div class="controls">
                            <textarea id="message" name="message" placeholder="Uw bericht moet minimaal 20 tekens bevatten" required data-minlength="20"><?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['message'] : '' ?></textarea>
                        </div>
                    </div>
                <span id="loading"></span>
                <input type="submit" value="Verstuur" id="submit-button" class="btn btn-large" />
                <p id="req-field-desc"><span class="required">*</span> Vereist veld</p>
                </fieldset>
            </form>
            <?php unset($_SESSION['cf_returndata']); ?>
        </div>

        <div class="col-span-4">
            <legend>Contact gegevens</legend>
            <address>
              <strong>Gouwestad Marketing & Media</strong><br>
              Noordkade 64, gebouw C 4e verd.<br>
              2741 EZ Waddinxveen<br>
              <abbr title="Telefoon">P:</abbr> 0182 - 63 95 85
            </address>
        </div>
      </div>
    </div>
</section>

<!--
<section>
  <div class="container">
    <div class="row">
      <div class="col-span-12">
        <p>Een ding dat bij ons altijd is blijven liggen is onze eigen website. Niet alleen omdat we er te weinig tijd voor hebben, maar ook omdat we daar nog kritischer op waren dan welk ander project dan ook. Eigenlijk was het nooit goed genoeg en dus deden we het maar niet. Maarja, een bureau met een website die er niet uitziet... en dus besloten we om van onze website niet langer de meest bijzondere website van de wereld te willen maken, met super revolutionaire technieken en speciale effecten. We wilden een plek waar we simpelweg konden vertellen wat wij doen. Een minimalistische site die draait om lezen. Dat is het geworden, alleen nu nog wat schrijven.
        </p>
      </div>
    </div>
  </div>
</section>-->




  <!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="http://gouwestad.com/js/vendor/jquery-1.8.2.min.js"><\/script>')</script> -->

    <script src="http://gouwestad.com/js/main.js"></script>
    <script src="http://gouwestad.com/js/vendor/bootstrap.min.js"></script>

    <script src="http://flexslider.woothemes.com/js/jquery.flexslider.js"></script>
    <link rel="stylesheet" href="http://gouwestad.com/js/vendor/jquery.flexslider.css" />

        <script>
  // Can also be used with $(document).ready()
$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    prevText: "",
    nextText: "",
    useCss: true,
    controlNav: false ,
    randomize: true
  });
});

  </script>

  <script src="http://gouwestad.com/js/vendor/Chart.min.js"></script>


<script type="text/javascript">
    $("[rel=tooltip]").tooltip({
      placement: "bottom"
    });
</script>


<script>
  var _gaq=[['_setAccount','UA-12094116-1'],['_trackPageview']]; // Change UA-XXXXX-X to be your site's ID
  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
  g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
  s.parentNode.insertBefore(g,s)}(document,'script'));
</script>

<!--[if lt IE 7 ]>
  <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.2/CFInstall.min.js"></script>
  <script>window.attachEvent("onload",function(){CFInstall.check({mode:"overlay"})})</script>
<![endif]-->

</body>
</html>