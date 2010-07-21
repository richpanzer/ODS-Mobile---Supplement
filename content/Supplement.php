<div class="hastoolbar">
  <div class="toolbar">
      <h4>Dietary Supplement</h4>
      <a class="button back" href="#Profile">Profile</a>
      <a class="button fade" href="#Edit_Supplement">Edit</a>
  </div>
  <h2 id="supName"></h2>
  <ul id="supProperties" class="rounded weight500">
    <li><span><strong class="label">Amount:</strong> <span id="supAmount"></span></span></li>
    <li><span><strong class="label">Frequency:</strong> <span id="supFrequency"></span> <span id="supFrequencyUnit"></span></span></li>
    <li>
      <span id="photocontainer"><strong class="label">Photos:</strong><br />
        <p><img id="supPhoto_01" class="inputImg" /><img id="supPhoto_02" class="inputImg" /></p>
        <br class="reset" />
      </span>
    </li>
    <li><span><strong class="label">Notes:</strong> <span id="supNotes"></span></span></li>
  </ul>
</div>
<?php
$currentPage = '';
include PATH_TXT . 'includes/toolbar.php';
?>