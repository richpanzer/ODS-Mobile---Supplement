<div class="minHeight350">
  <div class="toolbar">
    <h1>Edit DS</h1>
    <a class="button back" href="#Supplement">Back</a>
    <a class="button updateThisSupplement" href="#Profiles">Save</a>
  </div>
  <form id="updateSupplement" class="rounded" method="post">
    <ul class="rounded" style="display:none">
      <li><select placeholder="User Name" name="user_select" id="user_select_update"></select></li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="supplement_update">Name:</label>
        <input type="text" class="haslabel" name="supplement" id="supplement_update" />
        <br class="reset" />
      </li>
      <li>
        <label for="amount">Amount:</label>
        <input placeholder="Enter Amount" type="text" class="haslabel" name="amount" id="amount_update" />
        <br class="reset" />
      </li>
      <li>
        <label for="unit">Unit:</label>
        <select class="haslabel" name="unit" id="unit_update" label="Unit">
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
      <li>
        <label for="frequency">How Often:</label>
        <select class="haslabel-50" placeholder="How Often" name="frequency" id="frequency_update">
          <option>0x</option>
          <option>1x</option>
          <option>2x</option>
          <option>3x</option>
          <option>4x</option>
          <option>5x</option>
        </select>
        <select class="haslabel-125" name="frequency_unit" id="frequency_unit_update">
          <option>Hourly</option>
          <option selected="selected">Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Annually</option>
          <option>Occasionally</option>
        </select>
      </li>
    </ul>
    <ul class="rounded">
      <li>
        <div class="imgWrapper">
          <img class="inputImg" id="imageOne_update" />
        </div>
        <div class="imgBtnWrapper">
          <p><button id="getCamera_01">From Camera</button></p>
          <p><button id="getPicture_01">From Photo Library</button></p>
        </div>
        <br class="reset" />
      </li>
    </ul>
    <ul class="rounded">
      <li><label for="frequency">Notes:</label>
      <textarea name="notes" id="notes_update"></textarea></li>
    </ul>
  </form>
</div>
<?php
$currentPage = '';
include PATH_TXT . 'includes/toolbar.php';
?>