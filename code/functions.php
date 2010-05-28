<?php

include PATH_UNIX . 'includes/cssminphp.php';
include PATH_UNIX . 'includes/jsminphp.php';

// Get a full list of files by type for a given directory (non-recursive)
function getContentList($dir, $type) {
   // open specified directory
   $dirHandle = opendir($dir);
   $count = -1;
   $returnstr = "";
   $filelist = array();
   while ($file = readdir($dirHandle)) {
      if(!is_dir($file) && strpos($file, $type)>0) {
         // update count and string of files to be returned
         $count++;
         $filelist[] = $file;
      }
   }
   return $filelist;
   closedir($dirHandle);
}

// Strip everything but the name of a file
function strip_ext($name) {
	$ext = strrchr($name, '.');
	if($ext !== false) {
		$name = substr($name, 0, -strlen($ext));
	}
  	return $name;
}

function addjs() {

}

function addjsfile($file, $minify=true) {
  $output = file_get_contents($file);
  $output = str_replace('img/', dirname($file) . '/img/' , $output);
  $output = str_replace(PATH_UNIX, PATH_WEB, $output);
  if ($minify == true) {
    JSMin::minify($output);
  }
  return $output;
}

function addcss() {

}

function addcssfile($file, $minify=true) {
  $output = file_get_contents($file);
  $output = str_replace('img/', dirname($file) . '/img/' , $output);
  $output = str_replace(PATH_UNIX, PATH_WEB, $output);
  if ($minify == true) {
    $output = cssmin::minify($output);
  }
  return $output;
}


?>