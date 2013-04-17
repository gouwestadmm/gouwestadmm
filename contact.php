---
layout: contact
title: Gouwestad Marketing & Media
tagline: Ontwikkelen betekent vooruitgang
---


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