<?php

// Grab all content files, add a wrapper, a beat, and a melody
$filelist = getContentList(PATH_TXT, '.php');
foreach ($filelist as $file) {
  $filename = strip_ext(basename($file));
  if ($filename == '0') {
      $filename = 'home';
  }
  echo '<div id="' , str_replace(' ', '_', $filename) , '">';
  include PATH_TXT . $file;
  echo '</div>';
}

?>