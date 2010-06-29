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

// Add JS files to footer and minify
function addjsfile($file, $minify=true, $process=true) {
  $output = file_get_contents($file);
  if (($process == true) && (MINIFY == true || MINIFY == 1)) {
    $output = str_replace('img/', dirname($file) . '/img/' , $output);
    $output = str_replace(PATH_UNIX, PATH_WEB, $output);
    if ($minify == true) {
      JSMin::minify($output);
    }
  }
  $output = JSMin::minify($output);
  return $output;
}

// Add plain JS to minified output
function addjstext($output, $minify=true) {
  if (($minify == true) && (MINIFY == true || MINIFY == 1)) {
    $output = JSMin::minify($output);
  }
  return $output;
}

// Add CSS file to <head> and minify
function addcssfile($file, $minify=true, $imgPath='/img/') {
  $output = file_get_contents($file);
  $image = dirname($file) . $imgPath;
  $image = str_replace('css/', '', $image);
  $output = str_replace('img/', $image , $output);
  $output = str_replace(PATH_UNIX, PATH_WEB, $output);
  if (($minify == true) && (MINIFY == true)) {
    $output = cssmin::minify($output);
  }
  return $output;
}


?>