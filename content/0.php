<div class="inner-has-bottomtools">
  <div class="toolbar">
    <h1>Get Started</h1>
  </div>
  <ul class="rounded">
  <?php
    $home_page = 'Start';
    $pageExclusions = array($home_page,'Developer Settings','Profile','Supplement List','More','Supplement');
    foreach ($filelist as $file) {
      $filename = strip_ext(basename($file));
      $cleaned_filename = str_replace($findme, $replaceme, $filename);
      if ($filename == '0') {
        $filename = $home_page;
      }
      if (!in_array($filename, $pageExclusions)){
        echo '<li><a class="flip" href="#' , $cleaned_filename , '">' , $filename , '</a></li>';
      }
    }
  ?>
  </ul>
</div>
<?php include PATH_TXT . 'includes/homeicons.php'; ?>
<p style="background:#000;font-size:10px;color:#999;text-decoration:none"><a class="pop" href="#Developer_Settings">Dev.Settings</a></p>