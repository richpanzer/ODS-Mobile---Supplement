<?php
  include 'code/config.php';
  include 'code/global.php';
  include 'code/functions.php';
  include 'includes/cssminphp.php';
  include 'includes/jsminphp.php';
  include UNIX_THEME . 'head.php';
?>
<body>
      <?php
        $filelist = getContentList(PATH_TXT, '.php');
        foreach ($filelist as $file) {
          $filename = strip_ext(basename($file));
          echo '<div id="' . $filename . '">';
          include 'content/' . $file;
          echo '</div>';
        }
      ?>
<?php include UNIX_THEME . 'footer.php'; ?>
</body>
</html>