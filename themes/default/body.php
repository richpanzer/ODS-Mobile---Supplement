<?php

// Grab all content files
$filelist = getContentList(PATH_TXT, '.php');
foreach ($filelist as $file) {
  $filename = strip_ext(basename($file));
  echo '<div id="' . $filename . '">';
  echo '<div class="toolbar">';
  echo '<h1>' . $filename . '</h1>';
  echo '<a class="back" href="#home">Home</a>';
  echo '</div>';
  include PATH_TXT . $file;
  echo '</div>';
}

?>