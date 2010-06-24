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
  $(".submitProfile").bind('click', function(){
    var callback = jQT.goTo($('#Profiles'), 'flip');
    createProfile(callback);
    return false;
  });
  
  /* CRUD User Functionality */
  $(".submitUser").bind('click', function(){
    var callback = jQT.goTo($('#Profiles'), 'flip');
    var user = $("#profile_name").val();
    insertUser(user, callback);
    return false;
  });

  $(".addSupplement").bind('click', function(){
    var callback = jQT.goTo($('#Add_Dietary_Supplement'), 'flip');
    var user = $(".currentUser").html();
    //$(".userSelectToggle").hide();
    $(".userSelectToggle").val(user).css("opacity","0.25");
    $(".addSupplementInfo").html('Add Dietary Supplement to "' + user + '"');
    return false;
  });

  $(".sumbitUserSubmitProfile").bind('click', function(){
    var callback = jQT.goTo($('#Add_Dietary_Supplement'), 'flip');
    var user = $("#profile_name").val();
    insertUser(user, callback);
    $(".userSelectToggle").val(user).css("opacity","0.25");
    $(".addSupplementInfo").html('Add Dietary Supplement to "' + user + '"');
    return false;
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