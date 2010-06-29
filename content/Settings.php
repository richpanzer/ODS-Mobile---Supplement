<div class="inner-has-bottomtools">
  <div class="toolbar">
      <h1>Settings</h1>
      <a class="button goback" href="#Start">Done</a>
  </div>
  <div class="content">
    <p>Control your system settings here.</p>
  </div>
  <form id="mainSettings" method="post">
    <ul class="rounded">
      <li><input placeholder="Age" type="text" name="age" id="age" /></li>
      <li><input placeholder="Weight" type="text" name="weight" id="weight" /></li>
      <li><input placeholder="Start Date" type="text" name="date" id="date" /></li>
      <li><input type="submit" class="submit" name="action" value="Save" /></li>
    </ul>
  </form>
</div>
<?php include PATH_TXT . 'includes/toolbar.php'; ?>