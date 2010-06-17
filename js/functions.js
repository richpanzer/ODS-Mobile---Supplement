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

// Setup all Database Tables
function setupDatabaseTables(reset) {
  var setupQuery = new Array();
  setupQuery[0] = 'CREATE TABLE IF NOT EXISTS `user` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`user` VARCHAR(32) NOT NULL)';
  setupQuery[1] = 'CREATE TABLE IF NOT EXISTS `supplement` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`name` VARCHAR(32) NOT NULL)';
  setupQuery[2] = 'CREATE TABLE IF NOT EXISTS `profile` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' + // PK
    '`user_id` INTEGER NOT NULL CONSTRAINT fk_user_id REFERENCES user(id) ON DELETE CASCADE, ' +  // FK
    '`supplement_id` INTEGER NOT NULL CONSTRAINT fk_supplement_id REFERENCES supplement(id) ON DELETE CASCADE, ' + // FK
    '`amount` VARCHAR(16) NOT NULL, ' +
    '`unit` VARCHAR(16) NOT NULL, ' +
    '`frequency` VARCHAR(16) NOT NULL, ' +
    '`notes` VARCHAR(256) NOT NULL, ' +
    '`myimg` VARCHAR(256) NOT NULL);'
  setupQuery[3] = "CREATE TRIGGER fki_profile_user_id " +
    "BEFORE INSERT ON profile " +
    "FOR EACH ROW BEGIN " +
    "SELECT RAISE(ROLLBACK, 'insert on table `profile` violates foreign key constraint `fk_user_id`') " +
    "WHERE  NEW.user_id IS NOT NULL " +
    "AND (SELECT `id` FROM `user` WHERE `id` = NEW.user_id) IS NULL;" +
    "END;";
  setupQuery[4] = "CREATE TRIGGER fki_profile_supplement_id " +
    "BEFORE INSERT ON profile " +
    "FOR EACH ROW BEGIN " +
    "SELECT RAISE(ROLLBACK, 'insert on table `profile` violates foreign key constraint `fk_supplement_id`') " +
    "WHERE  NEW.supplement_id IS NOT NULL " +
    "AND (SELECT `id` FROM `supplement` WHERE `id` = NEW.supplement_id) IS NULL;" +
    "END;";
  queryArrays(setupQuery);
}

// Prepopulate Database
function prepopulateDatabase() {
  var setupQuery = new Array();
  setupQuery[0] = "INSERT OR IGNORE INTO `user` (id, user) VALUES (1, 'Rich');";
  setupQuery[1] = "INSERT OR IGNORE INTO `user` (id, user) VALUES (2, 'James');";
  setupQuery[2] = "INSERT OR IGNORE INTO `supplement` (id, `name`) VALUES (1, 'Aloe Vera');";
  setupQuery[3] = "INSERT OR IGNORE INTO `supplement` (id, `name`) VALUES (2, 'Antioxidants');";
  setupQuery[4] = "INSERT OR IGNORE INTO `supplement` (id, `name`) VALUES (3, 'Berries');";
  queryArrays(setupQuery);
}

// Reset contents of database tables
function clearDatabaseContent(callback) {
  var resetQuery = new Array();
  resetQuery[0] = 'DROP TABLE `profile`;';
  resetQuery[1] = 'DROP TABLE `supplement`;';
  resetQuery[2] = 'DROP TABLE `user`;';
  queryArrays(resetQuery);
  callback();
}

// dummy function
function testme() {
  alert('hello world!');
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
        /* would like to optimize all of the next few lines down to this one: insertProfile(callback, userID, last_insert_rowid(), amount, unit, frequency, notes, myimg);*/
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

// Insert a single user row
function insertUser() {
  var userQuery = new Array();
  $('#noresultProfileList').css("color","red");
  userQuery[0] = "INSERT INTO user (user) VALUES ('" + $("#profile_name").val() + "');";
  queryArrays(userQuery);
}

function removeUserOptions() {
  $('#profile_list, #user_select').children().remove().end();
}

function addUserOptionsError() {
  $('#profile_list').append($('<ul class="rounded"></ul>'));
  $('#profile_list ul').
    append($('<li></li>').
    attr("value",noUsersError).
    text(noUsersError));
  $('#user_select').
    append($("<option></option>").
    attr("value",noUsersError).
    text(noUsersError));
}

// Generic function used for SELECT queries with a return argument
function updateUserLists() {
  var query = "SELECT * FROM `user`;";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function(transaction, results) {
      if (results.rows.length > 0) {
        removeUserOptions();
        for (var i=0; i<results.rows.length; i++) {
          var row = results.rows.item(i);
          $('#profile_list').
            append($('<ul class="rounded"></ul>'));
          $('#profile_list ul').eq(i).
            append($('<li></li>').
            attr("value",row['id']).
            text(row['user']));
          $('#user_select').
            append($("<option></option>").
            attr("value",row['id']).
            attr("name",row['id']).
            text(row['user']));
        }
      } else {
        addUserOptionsError();
      }
    }, errorHandler);
  });
}