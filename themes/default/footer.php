<?php
$const = get_defined_constants();
$freeformOutput = <<<EOD
var jQT = new $.jQTouch({
  icon: '{$const['THEME_IMG']}jqtouch.png',
  addGlossToIcon: false,
  startupScreen: '{$const['THEME_IMG']}startup.png',
  statusBar: 'black',
  preloadImages: [
      '{$const['JQTHEME']}img/back_button.png',
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
?>
  <script type="text/javascript">
    <?php
      include UNIX_JS . 'jquery-1.4.2.min.js';
      include UNIX_JQ . 'jqtouch/jqtouch.min.js';
      echo addjstext($freeformOutput);
      // format default::: addjstofile($file, $minify=true);
      echo addjsfile(UNIX_JS . 'config.js');
      echo addjsfile(UNIX_JS . 'functions.js');
      echo addjsfile(UNIX_THEME . 'js/script.js');
      if (USEGA == true) {
        echo addjsfile(UNIX_JS . 'gacode.js');
      }
    ?>
  </script>
</body>
</html>