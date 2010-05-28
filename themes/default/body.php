<?php

// Grab all content files
$filelist = getContentList(PATH_TXT, '.php');
foreach ($filelist as $file) {
  $filename = strip_ext(basename($file));
  echo '<div id="' . $filename . '">';
  include 'content/' . $file;
  echo '</div>';
}

?>