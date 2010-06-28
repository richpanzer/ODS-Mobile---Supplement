<?php

define('SITENAME', 'My Dietary Supplement');
define('PATH_UNIX', 'C:\wamp\www\web-app\/');
define('PATH_WEB', 'http://192.168.110.33/web-app/');
define('THEME',  'custom'); // Select the iPhone base theme.
define('USERTHEME', 'default'); // User created addon theme.
define('USEGA', false); // Turn on Google Analytics
define('MINIFY', true); // Globally turn on or off JS/CSS minification

$db = array(
  'host' => 'localhost',
  'user' => 'root',
  'pass' => '',
  'name' => 'my_database_name'
);

include 'global.php';

?>