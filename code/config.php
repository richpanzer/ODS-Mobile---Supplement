<?php

define('SITENAME', 'Supplement Tracker');
define('PATH_UNIX', 'C:\wamp\www\ODS\iphone3\/');
define('PATH_WEB', 'http://localhost/ODS/iphone3/');
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