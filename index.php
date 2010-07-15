<?php

include 'code/config.php';
$messages = array();

// Include core functions
if (file_exists(PATH_CODE . 'functions.php')) {
    include PATH_CODE . 'functions.php';
} else {
    $messages[] = 'Core functions not found!';
}

// Include theme functions
if (file_exists(UNIX_THEME . 'functions.php')) {
    include UNIX_THEME . 'functions.php';
}

// Include theme template
if (file_exists(UNIX_THEME . 'template.php')) {
  $buildHtml = get_include_contents(UNIX_THEME . 'template.php');
} else {
    $messages[] = 'Theme template not found!';
}

echo $buildHtml;


$myFile = 'index';
$fh = fopen($myFile, 'w') or die("I cannot open the 'index.html' file!");
fwrite($fh, $buildHtml);
fclose($fh);



?>