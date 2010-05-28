<?php

// DO NOT CHANGE!
define('PATH_CSS',       PATH_WEB   . 'css/');
define('PATH_JS',        PATH_WEB   . 'js/');
define('PATH_AJAX',      PATH_WEB   . 'ajax/');
define('PATH_IMG',       PATH_WEB   . 'img/');
define('PATH_TXT',       PATH_UNIX  . 'content/');
define('PATH_CODE',      PATH_UNIX  . 'code/');
define('PATH_CLASSES',   PATH_UNIX  . 'classes/');
define('PATH_FUNCTIONS', PATH_UNIX  . 'functions/');
define('UNIXPATH_THEME', PATH_UNIX  . 'themes/' . THEME . '/');
define('UNIX_AJAX',      PATH_UNIX  . 'ajax/');
define('PATH_THEME',     PATH_WEB   . 'themes/' . THEME . '/');
define('THEME_CSS',      PATH_THEME . 'css/');
define('THEME_JS',       PATH_THEME . 'js/');
define('THEME_IMG',      PATH_THEME . 'img/');
define('JQTOUCH',        PATH_WEB   . 'jqtouch/');

$messages = array();

// Include core functions
if (file_exists(PATH_FUNCTIONS . 'functions.php')) {
	include PATH_FUNCTIONS . 'functions.php';
} else {
	$messages[] = 'Core functions not found!';
}

// Include theme functions
if (file_exists(UNIXPATH_THEME . 'functions.php')) {
  include UNIXPATH_THEME . 'functions.php';
}

// Include theme template
if (file_exists(UNIXPATH_THEME . 'template.php')) {
	include UNIXPATH_THEME . 'template.php';
} else {
	$messages[] = 'Theme template not found!';
}

?>