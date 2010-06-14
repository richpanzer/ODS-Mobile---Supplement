<div class="toolbar">
  <h1>Supplement Tracker</h1>
  <a class="button flip" id="infoButton" href="#Settings">Settings</a>
</div>
<div class="content">
  <p>Hey guys, this is the main menu area.  Pretty cool, huh?  It looks about like an iPhone main menu should.</p>
</div>
<ul class="rounded">
<?php
  $pageExclusions = array('home');
  foreach ($filelist as $file) {
    $filename = strip_ext(basename($file));
    $cleaned_filename = str_replace($findme, $replaceme, $filename);
    if ($filename == '0') {
      $filename = 'home';
    }
    if (!in_array($filename, $pageExclusions)){
      echo '<li><a class="revealme" href="#' , $cleaned_filename , '">' , $filename , '</a></li>';
    }
  }
?>
</ul>
<div class="info">
  <p>Info box example.</p>
</div>