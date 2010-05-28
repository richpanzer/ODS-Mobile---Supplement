<?php

// DO NOT CHANGE!
define('PATH_CSS',       PATH_WEB   . 'css/');
define('PATH_JS',        PATH_WEB   . 'js/');
define('PATH_AJAX',      PATH_WEB   . 'ajax/');
define('PATH_IMG',       PATH_WEB   . 'img/');
define('JQTOUCH',        PATH_WEB   . 'lib/jqtouch/');
define('JQTHEME',        PATH_WEB   . 'lib/jqtouch/themes/' . THEME . '/');
define('PATH_THEME',     PATH_WEB   . 'themes/' . USERTHEME . '/');
define('PATH_TXT',       PATH_UNIX  . 'content/');
define('PATH_CODE',      PATH_UNIX  . 'code/');
define('PATH_CLASSES',   PATH_UNIX  . 'classes/');
define('UNIX_JQTHEME',   PATH_UNIX  . 'lib/jqtouch/themes/' . THEME . '/');
define('UNIX_THEME',     PATH_UNIX  . 'themes/' . USERTHEME . '/');
define('UNIX_JS',        PATH_UNIX  . 'js/');
define('UNIX_JQ',        PATH_UNIX  . 'lib/jqtouch/');
define('UNIX_AJAX',      PATH_UNIX  . 'ajax/');
define('THEME_CSS',      PATH_THEME . 'css/');
define('THEME_JS',       PATH_THEME . 'js/');
define('THEME_IMG',      PATH_THEME . 'img/');


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