<p>Hey guys, this is the main menu area.  Pretty cool, huh?  It looks about like an iPhone main menu should.</p>
<p>The really cool part is switching themes by changing one variable initialization. No more changing a bunch of paths.</p>
<ul class="rounded">
<?php
  $filelist = getContentList(PATH_TXT, '.php');
  foreach ($filelist as $file) {
    $filename = strip_ext(basename($file));
    if ($filename == '0') {
      continue;
    }
    echo '<li><a class="revealme" href="#page1">' . $filename . '</a></li>';
  }
?>
</ul>