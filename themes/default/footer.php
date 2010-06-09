  <script type="text/javascript">
    <?php
      include UNIX_JS . 'jquery-1.4.2.min.js';
      include UNIX_JQ . 'jqtouch/jqtouch.min.js';
    ?>
    var jQT = new $.jQTouch({
      icon: '<?php echo PATH_WEB; ?>jqtouch.png',
      addGlossToIcon: false,
      startupScreen: '<?php echo PATH_WEB; ?>jqt_startup.png',
      statusBar: 'black',
      preloadImages: [
          '<?php echo JQTHEME; ?>img/back_button.png',
          '<?php echo JQTHEME; ?>img/back_button_clicked.png',
          '<?php echo JQTHEME; ?>img/button_clicked.png',
          '<?php echo JQTHEME; ?>img/grayButton.png',
          '<?php echo JQTHEME; ?>img/whiteButton.png',
          '<?php echo JQTHEME; ?>img/loading.gif'
          ]
    });
    $(function(){
      jQT.addAnimation({
          name: 'reveal',
          selector: '.revealme'
      });
    });
    <?php
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