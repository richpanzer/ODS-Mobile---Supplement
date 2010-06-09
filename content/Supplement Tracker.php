<div class="toolbar">
    <h1>Supplement Tracker</h1>
    <a class="back goback" href="#home">Profile</a>
    <a class="button goback" href="#home">Save</a>
</div>
<div class="info">
  <p><strong>A place to set stuff</strong></p>
</div>
<div class="content">
  <p>You know... like name, address, age, vitamin supplements, social security number, pin number, bank account, email passwords, a copy of your utility bill, etc.</p>
</div>
<form id="mainSettings" method="post">
  <ul class="rounded">
    <li><input placeholder="Supplement Name" type="text" name="supplement" id="supplement" /></li>
    <li>
      <select placeholder="Amount" name="amount" id="amount">
        <option>1mg</option>
        <option>10mg</option>
        <option>It comes in pints?!?!</option>
      </select>
    </li>
    <li>
      <select placeholder="Unit" name="unit" id="unit" label="Unit">
        <option>kg</option>
        <option>mg</option>
        <option>lbs</option>
        <option>tons</option>
      </select>
    </li>
    <li>
      <select placeholder="Frequency" name="frequency" id="frequency">
        <option>Like Oxygen</option>
        <option>5x Day</option>
        <option>3x Day</option>
        <option>2x Day</option>
        <option>1x Day</option>
        <option>1x Week</option>
      </select>
    </li>
    <li><input type="submit" class="submit" name="action" value="Save" /></li>
  </ul>
  <ul class="rounded">
    <li>Add an image</li>
    <li>Notes</li>
  </ul>
</form>