  <script type="text/javascript">
    <?php
    $const = get_defined_constants();
    $freeformOutput = <<<EOD
    var jQT = new $.jQTouch({
      icon: '{$const['THEME_IMG']}icon.png',
      addGlossToIcon: false,
      startupScreen: '{$const['THEME_IMG']}startup.png',
      statusBar: 'black',
      slideSelector: 'body > * > ul li a, ul.rounded li a',
      cubeSelector: 'ul.edgetoedge li a',
      popSelector: '.toolbar a',
      flipSelector: '#startLinks a',
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
    echo addjstext($freeformOutput);
    // format default::: addjstofile($file, $minify=true);
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