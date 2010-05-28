<script type="text/javascript">
  <?php
    include UNIX_JS . 'jquery-1.4.2.min.js';
    include UNIX_JQ . 'jqtouch/jqtouch.min.js';
    echo JSMin::minify(file_get_contents(THEME_JS . 'script.js'));
  ?>
</script>