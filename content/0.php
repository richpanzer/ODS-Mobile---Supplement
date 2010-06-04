<div class="toolbar">
    <h1>Welcome to IQ Solutions</h1>
    <a class="button slideup" id="infoButton" href="#Settings">Settings</a>
</div>
<div class="content">
  <p>Hey guys, this is the main menu area.  Pretty cool, huh?  It looks about like an iPhone main menu should.</p>
</div>
<ul class="rounded">
<?php
  $pageExclusions = array('home','Settings');
  foreach ($filelist as $file) {
    $filename = strip_ext(basename($file));
    if ($filename == '0') {
      $filename = 'home';
    }
    if (!in_array($filename, $pageExclusions)){
      echo '<li><a class="revealme" href="#' , str_replace(' ', '_', $filename) , '">' , $filename , '</a></li>';
    }
  }
?>
</ul>
<div class="info">
  <p>The really cool part is switching themes by changing one variable initialization. No more changing a bunch of paths.</p>
  <p>The list above is an automated list of all pages... instead of having this hardcoded... at some point might make this a reuable function.</p>
</div>