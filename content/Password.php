<div class="toolbar">
    <h1>Password Protect App</h1>
    <a class="back" href="#Profile">Profile</a>
    <a class="button savePassword" href="#">Save</a>
</div>
<div class="info">
  <p>Update Your Password For this.</p>
</div>
<div class="hastoolbar">
  <form>
  <ul class="rounded">
    <li>
        <input type="password" placeholder="Password" id="password1" value="" />
    </li>
    <li>
        <input type="password" placeholder="Password Again" id="password2" value="" />
    </li>
  </ul>
  </form>
    <div class="error"></div>
    <div class="success"></div>
</div>
<?php
$currentPage = '';
include PATH_TXT . 'includes/toolbar.php';
?>