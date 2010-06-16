// Initialize database if browser supports client side databases, else throw an error
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

// Insert a profile row
function insertProfile(callback, userID, supplementID, amount, unit, frequency, notes, myimg) {
  var insertProfileValues = "'" + userID + "', '" + supplementID + "', '" + amount + "', '"
    + unit + "', '" + frequency + "', '" + notes + "', '" + myimg + "'";
  var insertProfileQuery = "INSERT INTO profile " +
    "(user_id, supplement_id, amount, unit, frequency, notes, myimg) " +
    "VALUES (" + insertProfileValues + ");";
  allPurposeDBQuery(insertProfileQuery, callback, errorHandler);
}

// Save a single supplement to the database
function createSupplement() {
  var callback  = function(){jQT.goBack();};
  var userID = $("#user_select option:selected").attr("name");
  var supplement = $("#supplement").val(); // User entered w/ Ajax DB suggestions
  var amount = $("#amount").val();
  var unit = $("#unit").val();
  var frequency = $("#frequency").val();
  var notes = $("#notes").val();
  var myimg = 'Image 1 Placeholder';
  var supplementInsertQuery = "INSERT INTO supplement (`name`) VALUES ('" + supplement + "');";
  var querySupplementID = "SELECT `id` FROM `supplement` WHERE `name`='" + supplement + "' LIMIT 1;";

  db.transaction(function(transaction) {
    transaction.executeSql(querySupplementID, [], function(transaction, result1) {
      if (result1.rows.length > 0) {
        // Supplement already exists, so take id and add new profile row
        supplementID = result1.rows.item(0)['id'];
        insertProfile(callback, userID, supplementID, amount, unit, frequency, notes, myimg);
      } else {
        // Insert Supplement
        allPurposeDBQuery(supplementInsertQuery, callback, errorHandler);
        // Get new supplement ID and insert profile row
        db.transaction(function(transaction) {
          transaction.executeSql(querySupplementID, [], function(transaction, result2) {
            supplementID = result2.rows.item(0)['id'];
            insertProfile(callback, userID, supplementID, amount, unit, frequency, notes, myimg);
          });
        });
      }
    }, errorHandler);
  });
  return false;
}

// Add a user
function insertUser() {
  alert('hello');
  var callback  = function(){jQT.goBack();};
  var insertProfileQuery = "INSERT INTO user (user) VALUES ('Paulina');";
  allPurposeDBQuery(insertProfileQuery, callback, errorHandler);
}

function listUsersAddSupplement(results) {
  for (var i=0; i<results.rows.length; i++) {
    if (i==0) $('#user_select').children().remove().end();
    var row = results.rows.item(i);
    $('#user_select').
      append($("<option></option>").
      attr("value",row['id']).
      attr("name",row['id']).
      text(row['user']));
  }
}

function listAllUsers(results) {
  for (var i=0; i<results.rows.length; i++) {
    if (i==0) $('#profile_list').children().remove().end();
    var row = results.rows.item(i);
    $('#profile_list').
      append($('<ul class="rounded"></ul>'));
    $('#profile_list ul').eq(i).
      append($('<li></li>').
      attr("value",row['id']).
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