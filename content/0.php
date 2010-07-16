<div class="has-big-bottomtools">
  <div class="info">
    <p>Get Started</p>
  </div>
  <?php /*
  <ul id="startLinks">
  <?php
    $home_page = 'Start';
    $pageExclusions = array(
      $home_page,
      'Developer Settings',
      'Profile',
      'Supplement List',
      'More',
      'Supplement',
      'Update Profile',
	  'Password',
      'Edit Supplement'
      );
    $i = 1;
    foreach ($filelist as $file) {
      $filename = strip_ext(basename($file));
      $cleaned_filename = str_replace($findme, $replaceme, $filename);
      if ($filename == '0') $filename = $home_page;
      if ($i == 2) {
        $border = ' class="centerBorder"';
      } elseif ($i == 5) {
        $border = ' class="centerMiddleBorder"';
      } elseif ($i == 4 || $i == 6 || $i == 7 || $i == 9 ) {
        $border = ' class="middleBorder"';
      } elseif ($i == 8) {
        $border = ' class="bottomMiddle"';
      } else {
        $border = '';
      }
      if (!in_array($filename, $pageExclusions)){
        echo '<li', $border ,'><a href="#', $cleaned_filename , '">', $i, '<br />', $filename , '</a></li>';
        $i++;
      }
    }
  ?>
  </ul> */ ?>
  <ul id="startLinks">
    <li>
      <a href="#Profiles"><span class="start1"></span>Profiles</a>
    </li>
    <li class="borderSides">
      <a href="#Add_Profile"><span class="start2"></span>Add Profiles</a>
    </li>
    <li>
      <a href="#Add_Dietary_Supplement"><span class="start3"></span>Add Dietary<br />Supplement</a>
    </li>
    <li class="borderTop">
      <a href="#Tips"><span class="start4"></span>Tips</a>
    </li>
    <li class="borderTopSides">
      <a href="#Dietary_Supplement_Info"><span class="start5"></span>Resources</a>
    </li>
    <li class="borderTop">
      <a href="#Email_Profile"><span class="start6"></span>Email Profile</a>
    </li>
    <li class="borderTop">
      <a href="#Instructions"><span class="start7"></span>Instructions</a>
    </li>
    <li class="borderTopSides">
      <a href="#Learn_About_ODS"><span class="start8"></span>About</a>
    </li>
    <li class="borderTop">
      <a href="#Settings"><span class="start9"></span>Settings</a>
    </li>
  </ul>
</div>
<div class="footerLogos">
  <ul>
    <li><a href="#home"><img src="content/img/logo1.png" alt="Some Text" /></a></li>
    <li class="last"><a href="#home"><img src="content/img/logo2.png" alt="Some Text" /></a></li>
  </ul>
</div>
<?php /*<p style="background:#000;font-size:10px;color:#999;text-decoration:none"><a class="flip" href="#Developer_Settings">Developer Settings</a></p>*/ ?>