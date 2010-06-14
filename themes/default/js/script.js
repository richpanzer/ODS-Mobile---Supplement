var thisdb = openDatabase(dbInfo['name'],dbInfo['ver'],dbInfo['display'],dbInfo['size']);

$(document).ready(function() {

  var setupQuery = new Array();
/* How this could go in a larger app...
 *setupQuery[0] = 'CREATE TABLE IF NOT EXISTS `user` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`user` CHAR NOT NULL)';
  setupQuery[1] = 'CREATE TABLE IF NOT EXISTS `supplement` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`name` CHAR NOT NULL, ' +
    '`img_url` CHAR NOT NULL, ' +
    '`img_url2` CHAR NOT NULL)';
  setupQuery[2] = 'CREATE TABLE IF NOT EXISTS `supplement_profile` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`amount` CHAR NOT NULL, ' +
    '`unit` CHAR NOT NULL, ' +
    '`frequency` CHAR NOT NULL, ' +
    '`notes` CHAR NOT NULL, ' +
    '`profile_id` CHAR NOT NULL)'; */

  setupQuery[0] = 'CREATE TABLE IF NOT EXISTS `supplement` (' +
    '`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
    '`user` CHAR NOT NULL, ' +
    '`supplement` CHAR NOT NULL, ' +
    '`amount` CHAR NOT NULL, ' +
    '`unit` CHAR NOT NULL, ' +
    '`frequency` CHAR NOT NULL, ' +
    '`notes` CHAR, ' +
    '`img1` CHAR, ' +
    '`img2` CHAR)';

  for (var i=0;i<setupQuery.length;i++) {
    dbQuery(setupQuery[i]);
  }

  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', function(){
    loadMainSettings();
  });

  $("#singleSupplement").submit(saveSupplement);


});