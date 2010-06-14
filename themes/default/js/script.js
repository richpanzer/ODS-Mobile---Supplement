var db;
initDB();

$(document).ready(function() {

  var setupQuery = new Array();
  setupQuery[0] = 'CREATE TABLE IF NOT EXISTS `user` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`user` CHAR NOT NULL)';
  setupQuery[1] = 'CREATE TABLE IF NOT EXISTS `supplement` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`name` CHAR NOT NULL)';
  setupQuery[2] = 'CREATE TABLE IF NOT EXISTS `profile` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' + // PK
    '`user_id` INTEGER, ' +  // FK
    '`supplement_id` INTEGER, ' + // FK
    '`amount` CHAR NOT NULL, ' +
    '`unit` CHAR NOT NULL, ' +
    '`frequency` CHAR NOT NULL, ' +
    '`notes` CHAR NOT NULL, ' +
    '`myimg` CHAR NOT NULL, ' +
    'FOREIGN KEY (user_id) REFERENCES user(id), ' +
    'FOREIGN KEY (supplement_id) REFERENCES supplement(id))';

  var resetQuery = new Array();
  resetQuery[0] = 'DROP TABLE `profile`;';
  resetQuery[1] = 'DROP TABLE `supplement`;';
  resetQuery[2] = 'DROP TABLE `user`;';

  queryArrays(resetQuery);
  queryArrays(setupQuery);

  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', loadMainSettings);

  $("#saveSupplement").submit(createSupplement);
  $("#updateSupplement").submit(updateSupplement);
  $("#deleteSupplement").submit(deleteSupplement);

});