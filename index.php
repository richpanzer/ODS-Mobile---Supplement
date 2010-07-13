<?php
include 'code/config.php';

/*
 * Not a whole lot of logic written into this file, eh?
 * All the same, we need somewhere to start.  Probably wouldn't be a bad idea
 * to put the inclusion statments for global.php and the template files
 * here as well.
 */

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
	include UNIX_THEME . 'template.php';
} else {
	$messages[] = 'Theme template not found!';
}

?>