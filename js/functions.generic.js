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
function setupDatabaseTables() {
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
  setupDatabaseTables();
  callback();
}

/* Begin main settings page functions */
// Corresponds to the "Settings" page
/* Not used in our app function saveMainSettings() {
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
} */
/* End main settings page functions */

// This is the error handler for all database transactions
function errorHandler(transaction, error) {
  alert('The transaction could not be made. Error: '+error.message+' (Code '+error.code+')');
  return true;
}

// Generic query execution for an array of query statments
function queryArrays(query) {
  for (var i=0;i<query.length;i++) {
    dbQuery(query[i]);
  }
}

// Generic query execution
function dbQuery(query) {
  db.transaction(function(transaction){
    transaction.executeSql(query);
  });
  return false;
}

// Nearly the same as "dbQuery" but allows for an error handler and callback
function allPurposeDBQuery(query, nullHandler, errorHandler) {
  db.transaction(function(transaction,results){
    transaction.executeSql(query, null, function(results){
      if (nullHandler != null) {
        nullHandler(results);
      }
    }, errorHandler);
  });
  return false;
}


function emailThis(mailto,subject,body) {
	if (body.length > 0) {
    body = body.replace(/\s*\(.+\)\s*/, "@");
    window.location.href = "mailto:" + mailto + "&subject=" + subject + "&body=" + body;
    //alert("You are sending a message to '" + mailto + "' with the subject '" + subject + "'.");
    //alert("The body is: " + body);
	} else {
    alert("You didn't select any profiles!");
  }
}