<!doctype html>
<html lang="en">
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
        <title>iPhone Framework</title>
        <style type="text/css" media="screen">
        <?php
          echo cssmin::minify(file_get_contents(JQTOUCH . 'jqtouch/jqtouch.min.css'));
          echo cssmin::minify(file_get_contents(JQTHEME . 'theme.min.css'));
          echo cssmin::minify(file_get_contents(THEME_CSS . 'styles.css'));
        ?>
        </style>
    </head>