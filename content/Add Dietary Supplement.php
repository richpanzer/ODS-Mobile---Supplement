<div class="inner-has-bottomtools">
  <div class="info">
    <p id="addSupUserName" class="smallHeading"></p>
  </div>
  <div class="toolbar">
    <h3>Add DS</h3>
    <a id="addDSProfileBtn" class="blueButton" href="#Profiles">Profiles</a>
    <a class="button submitProfile" href="#">Save</a>
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
        <input type="text" class="haslabel" name="amount" id="amount" />
      </li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="unit">Unit:</label>
        <select class="haslabel" name="unit" id="unit" label="Unit">
          <option>mg</option>
          <option>g</option>
          <option>IU</option>
          <option>tsp</option>
          <option>T</option>
          <option>Packet</option>
          <option>Scoop</option>
          <option>Pill</option>
        </select>
      </li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="frequency">How Often:</label>
        <select class="haslabel-width1" placeholder="How Often" name="frequency" id="frequency">
          <option>0x</option>
          <option>1x</option>
          <option>2x</option>
          <option>3x</option>
          <option>4x</option>
          <option>5x</option>
        </select>
        <select class="haslabel-width1" name="frequency_unit" id="frequency_unit">
          <option selected="selected">&nbsp;</option>
          <option>Hourly</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Annually</option>
          <option>Occasionally</option>
        </select>
      </li>
    </ul>
    <ul class="rounded">
      <li><p><img class="dsImg getPicture" style="width:90px;height:90px" id="addDSimgOne" src="" />
          Add Photo<br />
          <!--<button class="getPicture">From Camera</button>--></p>
        <br class="reset" />
        <!-- for testing, add the buttons below -->
      </li>
    </ul>
    <ul class="rounded">
      <li><label for="frequency">Notes:</label>
      <textarea name="notes" id="notes"></textarea></li>
    </ul>
  </form>
</div>
<?php include PATH_TXT . 'includes/toolbar.php'; ?>