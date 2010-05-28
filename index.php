<?php
  include 'code/config.php';
  include 'code/global.php';
  include 'code/functions.php';
  include 'head.php';
?>
<body>
      <?php
        $filelist = getContentList('content/', '.php');
        foreach ($filelist as $file) {
          $filename = strip_ext(basename($file));
          echo '<div id="' . $filename . '">';
          include 'content/' . $file;
          echo '</div>';
        }
      ?>
</body>
</html>