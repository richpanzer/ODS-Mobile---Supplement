<div class="inner-has-bottomtools">
  <div class="toolbar">
    <h1>Edit DS</h1>
    <a class="button back" href="#Supplement">Back</a>
    <a class="button updateThisSupplement" href="#Supplement">Save</a>
  </div>
  <div class="info">
    <p id="addSupUserName"></p>
  </div>
  <form id="updateSupplement" class="rounded" method="post">
    <ul class="rounded userSelectToggle">
      <li><select placeholder="User Name" name="user_select" id="user_select_update"></select></li>
    </ul>
    <ul class="rounded">
      <li><input placeholder="Dietary Supplement Name" type="text" name="supplement" id="supplement_update" /></li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="amount">Amount:</label>
        <input type="text" class="haslabel" name="amount" id="amount_update" />
      </li>
    </ul>
    <ul class="rounded">
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
      </li>
    </ul>
    <ul class="rounded">
      <li>
        <label for="frequency">How Often:</label>
        <select class="haslabel" placeholder="How Often" name="frequency" id="frequency_update">
          <option>With Breakfast</option>
          <option>With Every Meal</option>
          <option>Before Bed</option>
          <option>3x Daily</option>
          <option>2x Daily</option>
          <option>1x Daily</option>
          <option>1x Weekly</option>
        </select>
      </li>
    </ul>
    <ul class="rounded">
      <li>Add Photo:</li>
    </ul>
    <ul class="rounded">
      <li><label for="frequency">Notes:</label>
      <textarea name="notes" id="notes_update"></textarea></li>
    </ul>
  </form>
</div>
<?php include PATH_TXT . 'includes/toolbar.php'; ?>