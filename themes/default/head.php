<!doctype html>
<!-- html manifest="<?php echo PATH_WEB; ?>demo.manifest" lang="en" -->
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <?php //the above is from apple. below is from jqtouch... you do the math
    //<meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" /> ?>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="shortcut icon" href="<?php echo PATH_THEME; ?>favicon.ico" type="image/x-icon" />
    <?php /* Use these for custom icons and such...
    <link rel="apple-touch-icon" href="myCustomIcon.png" />
    <link rel="apple-touch-icon-precomposed" href="myCustomIcon.png" />
    */ ?>
    <script type="text/javascript" src="phonegap.js" charset="utf-8"></script>
    <title><?php echo SITENAMESHORT; ?></title>
    <?php
      echo '<style type="text/css" media="screen">';
      // format default::: addcssfile($file, $minify=true);
      echo addcssfile(PATH_UNIX . '/lib/jqtouch/jqtouch/jqtouch.css');
      echo addcssfile(UNIX_JQTHEME . 'theme.css');
      //echo addcssfile(PATH_UNIX . 'lib/jquery.autocomplete/styles.css', true, '/'); // Not required or wanted
      echo addcssfile(UNIX_THEME . 'css/styles.css');
      echo '</style>';
    ?>
  </head>
  <body>
  <?php /*
   *
   * It would be a great idea to create a pre-processor for all of this php/html
   * and minify html as well as javascript/css.
   */
  ?>