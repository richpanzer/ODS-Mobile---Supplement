$(document).ready(function() {

  /* Initialize Database */
  var db;
  initDB();
  setupDatabaseTables();
  updateUserLists();


  // Main Settings page execution
  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', loadMainSettings);

  /* CRUD Supplement Functionality */
  $(".submitSupplement").click(function(){
    $("#saveSupplement").submit();
  });
  $("#saveSupplement").submit(createSupplement);
  
  /* CRUD User Functionality */
  $("#submitUser").click(function(){
    $("#saveUser").submit();
  });
  $("#saveUser").submit(function(){
    insertUser();
  });

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