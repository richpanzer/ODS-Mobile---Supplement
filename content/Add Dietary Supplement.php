<div class="inner-has-bottomtools">
  <div class="toolbar">
      <h1>Add DS</h1>
      <a class="pop blueButton" href="#Profiles">Profiles</a>
      <a class="button goback submitProfile" href="#Profiles">Save</a>
  </div>
  <div class="info">
    <p id="addSupUserName"></p>
  </div>
  <form id="saveSupplement" class="form" method="post">
    <ul class="form userSelectToggle">
      <li>
        <label for="user_select">Profile</label>
        <select class="haslabel" placeholder="User Name" name="user_select" id="user_select">
        </select>
      </li>
    </ul>
    <ul class="form">
      <li><input placeholder="Dietary Supplement Name" type="text" name="supplement" id="supplement" /></li>
    </ul>
    <ul class="form">
      <li>
        <label for="amount">Amount</label>
        <select class="haslabel" placeholder="Amount" name="amount" id="amount">
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
    </ul>
    <ul class="form">
      <li>
        <label for="unit">Unit</label>
        <select class="haslabel" placeholder="Unit" name="unit" id="unit" label="Unit">
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
    <ul class="form">
      <li>
        <label for="frequency">How Often</label>
        <select class="haslabel" placeholder="How Often" name="frequency" id="frequency">
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
    <ul class="form">
      <li>Add Photo</li>
     </ul>
     <ul class="form">
      <li><textarea placeholder="Notes" name="notes" id="notes"></textarea></li>
    </ul>
  </form>
</div>
<?php include PATH_TXT . 'includes/toolbar.php'; ?>