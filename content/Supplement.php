<div class="toolbar">
    <h1>Add Supplement</h1>
    <a class="back goback pop" href="#Profiles">Profile</a>
    <a class="button goback submitProfile" href="#home">Save</a>
</div>
<div class="info">
  <p>Add Dietary Supplement</p>
</div>
<form id="saveSupplement" class="form" method="post">
  <ul class="rounded">
    <li>
      <select placeholder="User Name" name="user_select" id="user_select">
      </select>
    </li>
    <li><input placeholder="Supplement Name" type="text" name="supplement" id="supplement" /></li>
  </ul>
  <ul class="rounded">
    <li>
      <select placeholder="Amount" name="amount" id="amount">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
        <option>100</option>
        <option>250</option>
        <option>500</option>
        <option>750</option>
        <option>1000</option>
        <option>2000</option>
        <option>2500</option>
        <option>3000</option>
        <option>4000</option>
        <option>5000</option>
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
        <option>3x Day</option>
        <option>2x Day</option>
        <option>1x Day</option>
        <option>1x Week</option>
      </select>
    </li>
  </ul>
  <ul class="rounded">
    <li>Add an image</li>
    <li><textarea placeholder="Notes" name="notes" id="notes"></textarea></li>
  </ul>
</form>