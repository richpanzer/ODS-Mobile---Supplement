function saveMainSettings() {
  localStorage.age = $('#age').val();
  localStorage.budget = $('#budget').val();
  localStorage.weight = $('#weight').val();
  jQT.goBack();
  return false;
}

function loadMainSettings() {
    $('#age').val(localStorage.age);
    $('#budget').val(localStorage.budget);
    $('#weight').val(localStorage.weight);
}

function dbQuery(query) {
  thisdb.transaction(function(transaction){
    transaction.executeSql(query);
  });
}

function saveSupplement() {
  var user = $("#user").val();
  var supplement = $("#supplement").val();
  var ammount = $("#ammount").val();
  var unit = $("#unit").val();
  var frequency = $("#frequency").val();
  var image1 = 'Image 1 Placeholder';
  var image2 = 'Image 2 Placeholder';
  db.transaction(
    function(transaction) {
      transaction.executeSql(
        'INSERT INTO `supplement` (user, supplement, amount, unit, frequency, notes, img1, img2) VALUES (?,?,?,?,?,?,?);',
        [user, supplement, amount, unit, frequency, notes, img1, img2],
        function(){
          refreshEntries();
          jQT.goBack();
        },
        errorHandler
      );
    }
  );
    alert('Got here!');
  return false;
}