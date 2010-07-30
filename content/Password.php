<div class="toolbar">
    <h1>Passcode Protect</h1>
    <a class="back" href="#Profile">Profile</a>
    <a class="button savePassword" href="#">Save</a>
</div>
<div class="hastoolbar"><div class="vertical-scroll"><div>
  <div class="info">
    <p>Add a Password</p>
  </div>
  <form>
  <ul class="rounded">
    <li>
        <input type="password" placeholder="Enter Passcode" id="password1" value="" />
    </li>
    <li>
        <input type="password" placeholder="Re-Enter Passcode" id="password2" value="" />
    </li>
  </ul>
  </form>
  <div class="content">
    <p>Do not forget your passcode. There is no way to retreive it.</p>
  </div>
  <div class="error"></div>
  <div class="success"></div>
</div></div></div>
<?php
$currentPage = '';
include PATH_TXT . 'includes/toolbar.php';
?>