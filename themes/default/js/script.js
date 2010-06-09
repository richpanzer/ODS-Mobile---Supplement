var thisdb = openDatabase(dbInfo['name'],dbInfo['ver'],dbInfo['display'],dbInfo['size']);

$(document).ready(function() {

  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', function(){
    loadMainSettings();
  });
  
  var setupQuery = new Array();
  setupQuery[0] = 'CREATE TABLE IF NOT EXISTS `user` (' +
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
    '`profile_id` CHAR NOT NULL)';

  for (var i=0;i<setupQuery.length;i++) {
    dbQuery(setupQuery[i]);
  }

});