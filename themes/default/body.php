<?php

// Grab all content files, add a wrapper, a beat, and a melody
$filelist = getContentList(PATH_TXT, '.php');
$findme = array(" ", "'");
$replaceme = array("_", "");
foreach ($filelist as $file) {
  $filename = str_replace($findme, $replaceme, htmlentities(strip_ext(basename($file))));
  if ($filename == '0') {
      $filename = 'home';
  }
  echo '<div id="' , $filename , '" class="thisisapage">';
  echo '<div class="heading">';
  echo '<h1>' . SITENAME . '</h1>';
  echo '</div>';
  include PATH_TXT . $file;
  echo '</div>';
}

?>