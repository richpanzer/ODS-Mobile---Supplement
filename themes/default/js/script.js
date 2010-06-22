$(document).ready(function() {

  /* Initialize Database */
  var db;
  initDB();
  setupDatabaseTables();
  updateUserLists();

  /* Setup Listeners */
  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', loadMainSettings);

  /* CRUD Supplement Functionality */
  $(".submitProfile").click(function(){
    $("#saveSupplement").submit();
  });
  $("#saveSupplement").submit(createProfile);
  
  /* CRUD User Functionality */
  $(".submitUser").click(function(){
    $("#saveUser").submit();
  });
  $("#saveUser").submit(function(){
    insertUser($("#profile_name").val());
  });

  getSupplementList(1);

  // Need to delete all content for testing purposes or load some dummy data?
  $("#resetUserData").click(function(){
    clearDatabaseContent(removeUserOptions);
    addUserOptionsError();
  });
  $("#populateUserData").click(function(){
    clearDatabaseContent(prepopulateDatabase);
    updateUserListings();
  });

});