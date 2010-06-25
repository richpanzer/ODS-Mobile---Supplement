<div class="inner-has-bottomtools">
  <div class="toolbar">
    <h1>Get Started</h1>
  </div>
  <ul class="rounded">
  <?php
    $pageExclusions = array('home','Profile','Supplement List','More');
    foreach ($filelist as $file) {
      $filename = strip_ext(basename($file));
      $cleaned_filename = str_replace($findme, $replaceme, $filename);
      if ($filename == '0') {
        $filename = 'home';
      }
      if (!in_array($filename, $pageExclusions)){
        echo '<li><a class="flip" href="#' , $cleaned_filename , '">' , $filename , '</a></li>';
      }
    }
  ?>
  </ul>
</div>
<?php include PATH_TXT . 'includes/homeicons.php'; ?>