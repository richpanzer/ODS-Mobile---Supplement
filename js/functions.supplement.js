// Create a supplement entry
function createSupplement(supplement) {
  var query = "INSERT INTO supplement (`name`) VALUES ('" + supplement + "');";
  //dbQuery(query);
  allPurposeDBQuery(query, null, errorHandler);
}

// Returns supplement list for a given user id
function getSupplementList(uid) {
  var query = "SELECT *, " +
    "`user`.`id` as uid, `supplement`.`id` as sid, `profile`.`id` as pid " +
    "FROM `user` " +
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
        '_' + i + '" href="#">' + row['name'] + '</a></li>'));
      addCurrentSupListener(i,row['user'],row['uid'],row['sid'],row['pid'],row['name'],row['amount'],row['unit'],row['frequency'],row['frequency_unit'],row['notes']);
    }
  } else {
    addSupplementOptionsError();
  }
}

function addCurrentSupListener(i,user,uid,sid,pid,supplement,amount,unit,frequency,frequency_unit,image,notes) {
  $("#profile_entries li a.id" + uid + "_" + i).bind('click', function(){
    showCurrentSupplement(user,uid,sid,pid,supplement,amount,unit,frequency,frequency_unit,image,notes);
    jQT.goTo($('#Supplement'), 'flip');
  });
}

// Add the error message for "There are no supplements" in this box/select/whatever WORKS
function addSupplementOptionsError() {
  $('#profile_entries').append($('<li></li>').text(noSupplementsError));
}

function showCurrentSupplement(user,uid,sid,pid,supplement,amount,unit,frequency,frequency_unit,image,notes) {
  // This updates the "view" page
  $("#supName").html(supplement);
  $("#supAmount").html(amount + ' ' + unit);
  $("#supFrequency").html(frequency);
  $("#supFrequencyUnit").html(frequency_unit);
  $("#supPhoto").attr('src', "data:image/jpeg;base64," + image);
  if (notes.length > 0) {
    $("#supNotes").html(notes);
  } else {
    $("#supNotes").html('<span class="errorMsg">' + supNotesBlank + '</span>');
  }
  // This updates the "edit" page
  $("#user_select_update")
    .attr('name',uid)
    .append('<option value="' + uid + '">' + user + '</option>');
  $("#supplement_update").val(supplement).attr('name',sid);
  $("#amount_update").val(amount);
  $("#unit_update").val(unit);
  $("#frequency_update").val(frequency);
  $("#frequency_unit_update").val(frequency_unit);
  $("#notes_update").val(notes);
  $("#updateSupplement").attr('name',pid);
}