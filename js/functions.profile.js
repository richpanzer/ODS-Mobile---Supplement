// Save a single Profile to the database
function createProfile(callback) {
  var userID = $("#user_select option:selected").attr("name");
  var supplement = $("#supplement").val(); // User entered w/ Ajax DB suggestions
  var amount = $("#amount").val();
  var unit = $("#unit").val();
  var frequency = $("#frequency").val();
  var frequency_unit = $("#frequency_unit").val();
  var notes = $("#notes").val();
  //var myimg = 'Image 1 Placeholder';
  var myimg = $("#imageOne").attr('src');
  var querySupplementID = "SELECT `id` FROM `supplement` WHERE `name`='" + supplement + "' LIMIT 1;";
  db.transaction(function(transaction) {
    transaction.executeSql(querySupplementID, [], function(transaction, result1) {
      if (result1.rows.length > 0) {
        // Supplement already exists, so take id and add new profile row
        supplementID = result1.rows.item(0)['id'];
        insertProfile(callback,userID,supplementID,amount,unit,frequency,frequency_unit,notes,myimg);
      } else {
        // Insert Supplement
        createSupplement(supplement);
        // Get new supplement ID and insert profile row
        db.transaction(function(transaction) {
          transaction.executeSql(querySupplementID, [], function(transaction, result2) {
            supplementID = result2.rows.item(0)['id'];
            insertProfile(callback,userID,supplementID,amount,unit,frequency,frequency_unit,notes,myimg);
          });
        });
      }
    }, errorHandler);
  });
  return false;
}

// Insert a profile row
function insertProfile(callback,userID,supplementID,amount,unit,frequency,frequency_unit,notes,myimg) {
  var insertProfileValues = "'" + userID + "', '" + supplementID + "', '" + amount + "', '"
    + unit + "', '" + frequency + "', '" + frequency_unit + "', '" + notes + "', '" + myimg + "'";
  var insertProfileQuery = "INSERT INTO profile " +
    "(user_id, supplement_id, amount, unit, frequency, frequency_unit, notes, myimg) " +
    "VALUES (" + insertProfileValues + ");";
  dbQuery(insertProfileQuery);
  //allPurposeDBQuery(insertProfileQuery, callback, errorHandler);
}

function resetProfileForm() {
  $("#saveSupplement select").val(0);
  $("#saveSupplement textarea, #saveSupplement input").val('');
}


// needs testing
function getAllProfiles() {
  $("#emailProfiles").children().remove().end();
  var query = "SELECT * FROM `user`;";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function(transaction, result) {
      var queryprofile = '';
      for(var i=0;i<result.rows.length;i++) {
        var row = result.rows.item(i);
        $("#emailProfiles").append($('<ul class="rounded ' + row['id'] + '"><li><strong>' + "\n" + row['user'] + "\n" + '</strong></li></ul>'));
        getProfileByUser(row['id']);
      }
    });
  });
}

function getProfileByUser(uid) {
  var query = "SELECT * FROM `user` " +
    "JOIN `profile` ON `user`.`id`=`profile`.`user_id` " +
    "JOIN `supplement` ON `profile`.`supplement_id`=`supplement`.`id` " +
    "WHERE `profile`.`user_id`='" + uid + "';";
  db.transaction(function(transaction,results){
    transaction.executeSql(query, null, function(transaction,results){
      addProfileToDOM(results,uid);
    }, errorHandler);
  });
}

function addProfileToDOM(results,uid) {
  for(var i=0;i<results.rows.length;i++) {
    var row = results.rows.item(i);
    $("#emailProfiles ul." + uid).append($('<li class="weight500">' +
      row['name'] + ' - ' + row['amount'] + ' ' + row['unit'] + ' - ' + 
      row['frequency'] + ' ' + row['frequency_unit'] +
      '<span style="display:none"> - ' + row['notes'] + '</span>' + "\n" + '</li>'));
  }
}

// reset form for "Add Supplement" page
function resetAddProfileForm() {
  //alert('hello world');
  $("#saveSupplement input, #saveSupplement textarea").val('');
  $("#addSupUserName").html(addSupplementHeadingDefault);
  $("#user_select").val('1');
  //$(".userSelectToggle").css("opacity","1")
  $(".userSelectToggle").show();
}

// Update a profile row
function updateProfile(user,uid,sid,pid,supplement,amount,unit,frequency,frequency_unit,notes,myimg) {
  //alert('Supplement ID: ' + sid);
  var updateSup = "UPDATE `supplement` " +
    "SET `name`='" + supplement + "' " +
    "WHERE `id`=" + sid + ";";
  var updatePro = "UPDATE `profile` " +
    "SET `amount`='" + amount + "', " +
    "`unit`='" + unit + "', " +
    "`frequency`='" + frequency + "', " +
    "`frequency_unit`='" + frequency_unit + "', " +
    "`notes`='" + notes + "' " +
    "WHERE `id`=" + pid + ";";
  //alert(updatePro);
  /* doesn't work because of "return false" dbQuery(updateSup);
  dbQuery(updatePro);*/

  /* don't need to update the supplement name:*/
  db.transaction(function(transaction){
    transaction.executeSql(updateSup);
    transaction.executeSql(updatePro);
  });
  updateUserLists(uid,user);

}

// update user password
function updatePassword(password) {
  if(password.length) {
    password = hex_md5(password);
    var sql = "SELECT * FROM `setting` WHERE `name` = 'password';"
    db.transaction(function(transaction,results){
      transaction.executeSql(sql,null,function(transaction,results){
        if(!results.rows.length) {
          sql = 'INSERT INTO `setting` (`name`,`value`) VALUES(?,?)';
          transaction.executeSql(sql,['password',password],function(){
            $('.success').text('Your password has been saved.');
          });
        } else {
          sql = 'UPDATE `setting` SET `value` = ? WHERE `name` = ?;';
          transaction.executeSql(sql,[password,'password'],function(){
            $('.success').text('Your password has been saved.');
          });
        }
      },errorHandler);
    });
  }
}