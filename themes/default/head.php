<!doctype html>
<html lang="en">
<html>
  <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <?php /* <link rel="apple-touch-icon" href="myCustomIcon.png" />
      <link rel="apple-touch-icon-precomposed" href="myCustomIcon.png" /> */ ?>
      <title>iPhone Framework</title>
      <style type="text/css" media="screen">
      <?php
        // format default::: addcssfile($file, $minify=true);
        echo addcssfile(JQTOUCH . 'jqtouch/jqtouch.css');
        echo addcssfile(UNIX_JQTHEME . 'theme.css');
        echo addcssfile(THEME_CSS . 'styles.css');
      ?>
      </style>
  </head>
  <body>