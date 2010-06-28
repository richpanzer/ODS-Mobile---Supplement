// Create a supplement entry
function createSupplement(supplement) {
  var query = "INSERT INTO supplement (`name`) VALUES ('" + supplement + "');";
  //dbQuery(query);
  allPurposeDBQuery(query, null, errorHandler);
  resetAddProfileForm();
}

// Returns supplement list for a given user id
function getSupplementList(uid) {
  var query = "SELECT * FROM `user` " +
    "JOIN `profile` ON `user`.`id`=`profile`.`user_id` " +
    "JOIN `supplement` ON `profile`.`supplement_id`=`supplement`.`id` " +
    "WHERE `profile`.`user_id`='" + uid + "';";
  db.transaction(function(transaction,results){
    transaction.executeSql(query, null, function(transaction,results){
      addSupplementsToDOM(results);
    }, errorHandler);
  });
  //allPurposeDBQuery(query, addSupplementsToDOM, errorHandler);
  return false;
}

// Add all found supplements for a given result set to the dom WORKS
function addSupplementsToDOM(results) {
  if (results.rows.length > 0) {
    for (var i=0; i<results.rows.length; i++) {
      var row = results.rows.item(i);
      $('#profile_entries').append($('<li><a class="flip" href="#Supplement">' + row['name'] + '</a></li>'));
    }
  } else {
    addSupplementOptionsError();
  }
}

// Add the error message for "There are no supplements" in this box/select/whatever WORKS
function addSupplementOptionsError() {
  $('#profile_entries').append($('<li></li>').text(noSupplementsError));
}

// reset form for "Add Supplement" page
function resetAddProfileForm() {
  $("#saveSupplement input, #saveSupplement textarea").val('');
}