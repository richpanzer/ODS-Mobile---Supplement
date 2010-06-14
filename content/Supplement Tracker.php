<div class="toolbar">
    <h1>Supplement Tracker</h1>
    <a class="back goback" href="#Profile">Profile</a>
    <a class="button goback" href="#home">Cancel</a>
</div>
<div class="info">
  <p>Add Supplement</p>
</div>
<form id="singleSupplement" method="post">
  <ul class="rounded">
    <li>
      <select placeholder="User Name" name="user" id="user">
        <option>Rich</option>
        <option>James</option>
        <option>Paulina</option>
        <option>No profiles have been added.</option>
      </select>
    </li>
    <li><input placeholder="Supplement Name" type="text" name="supplement" id="supplement" /></li>
  </ul>
  <ul class="rounded">
    <li>
      <select placeholder="Amount" name="amount" id="amount">
        <option>0.1</option>
        <option>0.2</option>
        <option>1/4</option>
        <option>0.3</option>
        <option>1/3</option>
        <option>0.4</option>
        <option>0.5</option>
        <option>0.6</option>
        <option>2/3</option>
        <option>0.7</option>
        <option>3/4</option>
        <option>0.8</option>
        <option>0.9</option>
        <option>1.0</option>
        <option>2.0</option>
        <option>3.0</option>
        <option>4.0</option>
        <option>5.0</option>
        <option>50</option>
        <option>100</option>
        <option>150</option>
        <option>200</option>
        <option>250</option>
        <option>300</option>
        <option>350</option>
        <option>400</option>
        <option>450</option>
        <option>500</option>
        <option>750</option>
        <option>1000</option>
      </select>
    </li>
    <li>
      <select placeholder="Unit" name="unit" id="unit" label="Unit">
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
    <li>
      <select placeholder="Frequency" name="frequency" id="frequency">
        <option>With Breakfast</option>
        <option>With Every Meal</option>
        <option>Before Bed</option>
        <option>5x Day</option>
        <option>3x Day</option>
        <option>2x Day</option>
        <option>1x Day</option>
        <option>Every Other Day</option>
        <option>1x Week</option>
      </select>
    </li>
  </ul>
  <ul class="rounded">
    <li>Add an image</li>
    <li>Notes</li>
    <li><input type="submit" class="submit" name="action" value="Save" /></li>
  </ul>
</form>