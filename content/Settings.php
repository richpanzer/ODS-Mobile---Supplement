<div class="inner-has-bottomtools">
  <div class="toolbar">
      <h1>Settings</h1>
      <a class="button goback" href="#Start">Done</a>
  </div>
  <div class="info">
    <p><strong>A place to set stuff</strong></p>
  </div>
  <div class="content">
    <p>You know... like name, address, age, vitamin supplements, social security number, pin number, bank account, email passwords, a copy of your utility bill, etc.</p>
  </div>
  <form id="mainSettings" method="post">
    <ul class="rounded">
      <li><input placeholder="Age" type="text" name="age" id="age" /></li>
      <li><input placeholder="Weight" type="text" name="weight" id="weight" /></li>
      <li><input placeholder="Start Date" type="text" name="date" id="date" /></li>
      <li><input type="submit" class="submit" name="action" value="Save" /></li>
    </ul>
  </form>
  <div class="content">
    <p><a href="#Start" id="resetUserData" class="pop whiteButton">Reset User Data</a></p>
    <p><a href="#Start" id="populateUserData" class="pop whiteButton">Prepopulate Database</a></p>
  </div>
</div>
<?php include PATH_TXT . 'includes/toolbar.php'; ?>