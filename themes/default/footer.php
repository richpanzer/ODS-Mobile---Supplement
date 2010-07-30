  <script type="text/javascript">
    <?php
    $const = get_defined_constants();

    $freeformOutput = <<<EOD
    var IsiPhone = navigator.userAgent.indexOf("iPhone") != -1;
    var IsiPod = navigator.userAgent.indexOf("iPod") != -1;
    var IsiPad = navigator.userAgent.indexOf("iPad") != -1;
    var IsiPhoneOS = IsiPhone || IsiPad || IsiPod;
    if (typeof(PhoneGap) != 'undefined') {
      var isPhoneGap = true;
    }
    if (IsiPad) {
      $('body > *').css({'max-height': '1004px !important'});
      $('body > *').css({'max-width': '768px !important'});
    } else {
      $('body > *').css({'max-height': '460px !important'});
      $('body > *').css({'max-width': '300px !important'});
    }
    var jQT = new $.jQTouch({
      icon: '{$const['THEME_IMG']}icon.png',
      addGlossToIcon: false,
      startupScreen: '{$const['THEME_IMG']}startup.png',
      statusBar: 'black',
      slideSelector: 'body > * > ul li a, .rounded li a, .edgetoedge li a',
      popSelector: '.toolbar a, #startLinks a',
      slideupSelector: '.toolbar_bottom ul li a',
      preloadImages: [
          '{$const['JQTHEME']}img/backButton.png',
          '{$const['JQTHEME']}img/back_button_clicked.png',
          '{$const['JQTHEME']}img/button_clicked.png',
          '{$const['JQTHEME']}img/grayButton.png',
          '{$const['JQTHEME']}img/whiteButton.png',
          '{$const['JQTHEME']}img/loading.gif'
          ]
    });
    $(function(){
      jQT.addAnimation({
          name: 'reveal',
          selector: '.revealme'
      });
    });
EOD;
    echo addjsfile(UNIX_JS . 'jquery-1.3.2.min.js');
    echo addjsfile(UNIX_JS . 'jquery.clearform.js');
    echo addjsfile(UNIX_JQ . 'jqtouch/jqtouch.min.js');
    echo addjsfile(UNIX_JQ . 'extensions/jqt.scroll.js');
    echo addjstext($freeformOutput);
    // this is the format default::: addjstofile($file, $minify=true);
    // echo addjsfile(PATH_UNIX . 'lib/jquery.autocomplete/jquery.autocomplete.js'); // Need to add this later for supplement name field
    echo addjsfile(UNIX_JS . 'config.js');
    echo addjsfile(UNIX_JS . 'functions.generic.js');
    echo addjsfile(UNIX_JS . 'functions.user.js');
    echo addjsfile(UNIX_JS . 'functions.supplement.js');
    echo addjsfile(UNIX_JS . 'functions.profile.js');
    echo addjsfile(UNIX_JS . 'md5-min.js');
    echo addjsfile(UNIX_THEME . 'js/script.js');
    if (USEGA == true) {
      echo addjsfile(UNIX_JS . 'gacode.js');
    }
    ?>
  </script>
</body>
</html>