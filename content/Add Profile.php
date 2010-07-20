<div class="hastoolbar">
  <div class="toolbar">
      <h1>Add Profile</h1>
      <a class="blueButton" href="#Profiles">Profiles</a>
      <a class="button submitUser" href="#">Save</a>
  </div>
  <form id="saveUser" method="post">
    <ul class="rounded">
      <li><input type="text" placeholder="Enter Profile Name" name="profile_name" id="profile_name" /></li>
    </ul>
  </form>
  <div class="content">
    <p><a class="whiteButton sumbitUserSubmitProfile" href="#">Add Dietary Supplement</a></p>
  </div>
</div>
<?php
$currentPage = '';
include PATH_TXT . 'includes/toolbar.php';
?>