/* Initialize Database */
var db;
initDB();

$(document).ready(function() {

  /* Set up Queries */

  var setupQuery = new Array();
  setupQuery[0] = 'CREATE TABLE IF NOT EXISTS `user` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`user` VARCHAR(32) NOT NULL)';
  setupQuery[1] = 'CREATE TABLE IF NOT EXISTS `supplement` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`name` VARCHAR(32) NOT NULL)';
  /*setupQuery[2] = 'CREATE TABLE IF NOT EXISTS `profile` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' + // PK
    '`user_id` INTEGER, ' +  // FK
    '`supplement_id` INTEGER, ' + // FK
    '`amount` CHAR NOT NULL, ' +
    '`unit` CHAR NOT NULL, ' +
    '`frequency` CHAR NOT NULL, ' +
    '`notes` CHAR NOT NULL, ' +
    '`myimg` CHAR NOT NULL, ' +
    'FOREIGN KEY (user_id) REFERENCES user(id), ' +
    'FOREIGN KEY (supplement_id) REFERENCES supplement(id))';*/
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
  setupQuery[5] = "INSERT INTO `user` (user) VALUES ('Rich');";
  setupQuery[6] = "INSERT INTO `user` (user) VALUES ('James');";
  setupQuery[7] = "INSERT INTO `supplement` (`name`) VALUES ('Aloe Vera');";
  setupQuery[8] = "INSERT INTO `supplement` (`name`) VALUES ('Antioxidants');";
  setupQuery[9] = "INSERT INTO `supplement` (`name`) VALUES ('Berries');";


  var resetQuery = new Array();
  resetQuery[0] = 'DROP TABLE `profile`;';
  resetQuery[1] = 'DROP TABLE `supplement`;';
  resetQuery[2] = 'DROP TABLE `user`;';

  queryArrays(resetQuery);
  queryArrays(setupQuery);


  /* Main Execution */

  // Main Settings page execution
  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', loadMainSettings);


  // Get list of users and add to "Add Supplement" users drop down list
  var userSelectValues = new Array();
  userSelectValues = getUserList();
  /*
  userSelectValues[0] = 'Rich';
  userSelectValues[1] = 'Paulina';
  userSelectValues[2] = 'James';*/
  
  if(userSelectValues[0]) {
    $('#user_select').children().remove().end();
    $.each(userSelectValues, function(key, value) {
     $('#user_select').
      append($("<option></option>").
      attr("value",key).
      text(value));
    });
  }



  $("#saveSupplement").submit(createSupplement); // Needs work
  $("#updateSupplement").submit(updateSupplement); // Doesn't exist
  $("#deleteSupplement").submit(deleteSupplement); // Doesn't exist

});