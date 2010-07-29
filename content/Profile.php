<div class="toolbar">
  <h3 class="currentUser">Error</h3>
  <a class="button back" href="#Profiles">Profiles</a>
  <a id="profileGOTOaddDS" class="button" href="#Add_Dietary_Supplement">Add</a>
</div>
<div class="hastoolbar"><div class="vertical-scroll"><div>
  <h2 style="text-align:center">Dietary Supplements</h2>
  <span class="minHeight250">
    <ul id="profile_entries" class="rounded"><?php // Dynamically populated ?>
    </ul>
  </span>
<?php /*  <div class="content">
    <p><a href="#" id="updateUser" class="whiteButton">Edit Profile</a></p>
  </div>*/ ?>
</div></div></div>
<?php
$currentPage = '';
include PATH_TXT . 'includes/toolbar.php';
?>