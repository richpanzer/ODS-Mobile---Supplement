<?php

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

?>