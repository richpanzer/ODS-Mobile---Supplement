function initDB() {
  try {
    if(!window.openDatabase) {
      alert('This browser does not support databases!');
    } else {
      db = openDatabase(dbInfo['name'],dbInfo['ver'],dbInfo['display'],dbInfo['size']);
    }
  } catch(e) {
    if (e == 2) {
    // Version number mismatch.
      console.log("Invalid database version.");
    } else {
      console.log("Unknown error "+e+".");
    }
  }
}

// Corresponds to the "Settings" page
function saveMainSettings() {
  localStorage.age = $('#age').val();
  localStorage.weight = $('#weight').val();
  localStorage.date = $('#date').val();
  jQT.goBack();
  return false;
}

// Preload all main settings for "Settings" page
function loadMainSettings() {
    $('#age').val(localStorage.age);
    $('#budget').val(localStorage.budget);
    $('#weight').val(localStorage.weight);
}

// This is the error handler for all database transactions
function errorHandler(transaction, error) {
  alert('The transaction could not be made. Error: '+error.message+' (Code '+error.code+')');
  return true;
}

// Generic query execution
function dbQuery(query) {
  db.transaction(function(transaction){
    transaction.executeSql(query);
  });
  return false;
}

// Generic query execution for an array of query statments
function queryArrays(query) {
  for (var i=0;i<query.length;i++) {
    dbQuery(query[i]);
  }
}

// Nearly the same as "dbQuery" but allows for an error handler and callback
function allPurposeDBQuery(query, nullHandler, errorHandler) {
  db.transaction(function(transaction){
    transaction.executeSql(query, null, nullHandler, errorHandler);
  });
  return false;
}

// Save a single supplement to the database
function createSupplement() {
  var callback  = function(){jQT.goBack();};
  var user = $("#user_select").val(); // Select box only
  var supplement = $("#supplement").val(); // User entered w/ Ajax DB suggestions
  var amount = $("#amount").val();
  var unit = $("#unit").val();
  var frequency = $("#frequency").val();
  var notes = $("#notes").val();
  var myimg = 'Image 1 Placeholder';
  //queries
  var query1 = "INSERT INTO supplement (name) VALUES ('" + supplement + "');";
  var value2 = "'" + user + ", " + supplement + ", '" + amount + "', '" + unit + "', '" +
    frequency + "', '" + notes + "', '" + myimg + "'";
  //IF NOT EXISTS() // search for current supplement name.  if not exists, add.  if exists, grab id number.
  var query2 = "INSERT INTO profile " +
    "(user_id, supplement_id, amount, unit, frequency, notes, myimg) " +
    "VALUES (" + value2 + ");";
  allPurposeDBQuery(query1, callback, errorHandler);
  allPurposeDBQuery(query2, callback, errorHandler);
  return false;
}

// Add a user
function addUser() {
  var callback  = function(){jQT.goBack();};
  var query = "INSERT INTO user (user) VALUES ('" + $("add_user").val() + "');";
  allPurpouseDBQuery(query, callback, errorHandler);
}

function listUsersAddSupplement(results) {
  for (var i=0; i<results.rows.length; i++) {
  if (i==0) $('#user_select').children().remove().end();
  var row = results.rows.item(i);
  $('#user_select').
      append($("<option></option>").
      attr("value",i).
      attr("name",i).
      text(row['user']));
  }
}

function listAllUsers(results) {
  for (var i=0; i<results.rows.length; i++) {
  if (i==0) $('#profile_list').children().remove().end();
  var row = results.rows.item(i);
  $('#profile_list').
      append($("<li></li>").
      attr("value",i).
      text(row['user']));
  }
}

// Generic function used for SELECT queries with a return argument
function listUsers(whereSwitch) {
  var query = "SELECT * FROM `user`;";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function(transaction, results) {
      switch(whereSwitch) {
      case 'addSupplement':
        listUsersAddSupplement(results);
        break;
      case 'listUsers':
        listAllUsers(results);
        break;
      default:
        listUsersAddSupplement(results);
      }
    }, errorHandler);
  });
}

// Delete a user
function deleteUser(uid) {

}

// Get list of profiles by user id
function getProfileList() {
  var callback  = function(){jQT.goBack();};
  var query = "SELECT * FROM `profile`;";
  allPurpouseDBQuery(query, callback, errorHandler);
}

// Get supplement
function getProfile(pid) {
  var callback  = function(){jQT.goBack();};
  var query = "SELECT * FROM `user`;";
  allPurpouseDBQuery(query, callback, errorHandler);
}

// Delete profile
function deleteProfile(pid) {

}

// Update profile
function updateProfile(pid) {

}