<?php

// Grab all content files, add a wrapper, a beat, and a melody
$filelist = getContentList(PATH_TXT, '.php');
$findme = array(" ", "'");
$replaceme = array("_", "");
$home_page = 'Start';
$outputBuffer = '';
foreach ($filelist as $file) {
  $filename = str_replace($findme, $replaceme, htmlentities(strip_ext(basename($file))));
  if ($filename == '0') {
      $filename = $home_page;
  }
  $outputBuffer .= '<div id="' . $filename . '" class="thisisapage">' .
    '<div class="heading"></div>' .
    get_include_contents(PATH_TXT . $file) . '</div>';
}
echo $outputBuffer;

?>