<div class="toolbar">
  <h3>Add</h3>
  <a id="addDSProfileBtn" class="blueButton" href="#">Profiles</a>
  <a class="button submitProfile" href="#">Save</a>
</div>
<div class="hastoolbar"><div class="vertical-scroll"><div>
  <div class="info">
    <p id="addSupUserName"></p>
  </div>
  <form id="saveSupplement" class="form" method="post">
    <ul class="rounded userSelectToggle">
      <li><select placeholder="User Name" name="user_select" id="user_select"></select></li>
    </ul>
    <ul class="rounded">
      <li><input placeholder="Dietary Supplement Name" type="text" name="supplement" id="supplement" /></li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="amount">Amount:</label>
        <input placeholder="Enter Amount" type="text" class="haslabel" name="phone" id="amount" />
        <br class="reset" />
      </li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="unit">Unit:</label>
        <select class="haslabel" name="unit" id="unit">
          <option>mg</option>
          <option>g</option>
          <option>IU</option>
          <option>tsp</option>
          <option>T</option>
          <option>Packet</option>
          <option>Scoop</option>
          <option>Pill</option>
        </select>
        <br class="reset" />
      </li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="frequency">How Often:</label>
        <select class="haslabel-50" placeholder="How Often" name="frequency" id="frequency">
          <option>0x</option>
          <option>1x</option>
          <option>2x</option>
          <option>3x</option>
          <option>4x</option>
          <option>5x</option>
        </select>
        <select class="haslabel-125" name="frequency_unit" id="frequency_unit">
          <option>Hourly</option>
          <option selected="selected">Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Annually</option>
          <option>Occasionally</option>
        </select>
      </li>
    </ul>
    <ul class="rounded hideOniPad">
      <li>
        <div class="imgWrapper">
          <img class="inputImg" id="imageOne" />
        </div>
        <div class="imgBtnWrapper">
          <p><button id="getCamera_01">From Camera</button></p>
          <p><button id="getPicture_01">From Photo Library</button></p>
        </div>
        <br class="reset" />
      </li>
      <li>
        <div class="imgWrapper">
          <img class="inputImg" id="imageTwo" />
        </div>
        <div class="imgBtnWrapper">
          <p><button id="getCamera_02">From Camera</button></p>
          <p><button id="getPicture_02">From Photo Library</button></p>
        </div>
        <br class="reset" />
      </li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="frequency">Notes:</label>
        <textarea name="notes" id="notes"></textarea>
        <br class="reset" />
      </li>
    </ul>
    <div class="content">
      <p><a class="whiteButton submitProfile" href="#">Save</a></p>
    </div>
  </form>
  <div class="scrollspacer">&nbsp;</div>
</div></div></div>
<?php
$currentPage = 'addds';
include PATH_TXT . 'includes/toolbar.php';
?>