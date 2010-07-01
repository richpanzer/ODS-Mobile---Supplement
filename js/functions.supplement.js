// Create a supplement entry
function createSupplement(supplement) {
  var query = "INSERT INTO supplement (`name`) VALUES ('" + supplement + "');";
  //dbQuery(query);
  allPurposeDBQuery(query, null, errorHandler);
}

// Returns supplement list for a given user id
function getSupplementList(uid) {
  var query = "SELECT * FROM `user` " +
    "JOIN `profile` ON `user`.`id`=`profile`.`user_id` " +
    "JOIN `supplement` ON `profile`.`supplement_id`=`supplement`.`id` " +
    "WHERE `profile`.`user_id`='" + uid + "';";
  db.transaction(function(transaction,results){
    transaction.executeSql(query, null, function(transaction,results){
      addSupplementsToDOM(results,uid);
    }, errorHandler);
  });
  //allPurposeDBQuery(query, addSupplementsToDOM, errorHandler);
  return false;
}

// Add all found supplements for a given result set to the dom WORKS
function addSupplementsToDOM(results,uid) {
  if (results.rows.length > 0) {
    for (var i=0; i<results.rows.length; i++) {
      var row = results.rows.item(i);
      $('#profile_entries').append($('<li class="arrow"><a class="id' + uid +
        '_' + i + '" href="#Supplement">' + row['name'] + '</a></li>'));
      addCurrentSupListener(i,uid,row['name'],row['amount'] + ' ' +
        row['unit'],row['frequency'],row['notes']);
    }
  } else {
    addSupplementOptionsError();
  }
}

function addCurrentSupListener(i,uid,supName,supAmount,supFrequency,supNotes) {
  $("#profile_entries li a.id" + uid + "_" + i).bind('click', function(){
    showCurrentSupplement(supName,supAmount,supFrequency,supNotes);
  });
}

// Add the error message for "There are no supplements" in this box/select/whatever WORKS
function addSupplementOptionsError() {
  $('#profile_entries').append($('<li></li>').text(noSupplementsError));
}

function showCurrentSupplement(supName,supAmount,supFrequency,supNotes) {
  $("#supName").html(supName);
  $("#supAmount").html(supAmount);
  $("#supFrequency").html(supFrequency);
  if (supNotes.length > 0) {
    $("#supNotes").html(supNotes);
  } else {
    $("#supNotes").html('<span class="errorMsg">' + supNotesBlank + '</span>');
  }
}