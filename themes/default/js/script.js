$(document).ready(function() {

  // Initialize and setup database
  var db;
  initDB();
  setupDatabaseTables();
  updateUserLists();

  /* Not used in our application / Setup listeners for the main settings page
  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', loadMainSettings); */

  // Create a profile record and return to the "Profiles" page
  $(".submitProfile").bind('click', function(){
    var callback = jQT.goTo($('#Profiles'), 'flip');
    createProfile(callback);
    return false;
  });
  
  $("#addSupUserName").html(addSupplementHeadingDefault);

  // Listen to the "Add Dietary Supplement" on an existing "Profile" page
  $(".addSupplement").bind('click', function(){
    var callback = jQT.goTo($('#Add_Dietary_Supplement'), 'flip');
    var user = $(".currentUser").html();
    $("#addSupUserName").html(addSupplementHeadingStart + user + addSupplementHeadingEnd);
    return false;
  });

  // Add a new user record
  $(".submitUser").bind('click', function(){
    var callback = jQT.goTo($('#Profiles'), 'flip');
    var user = $("#profile_name").val();
    insertUser(user, callback);
    return false;
  });

  // Listen to the "Add Dietary Supplement" button on the "Add Profile" page
  $(".sumbitUserSubmitProfile").bind('click', function(){
    var callback = jQT.goTo($('#Add_Dietary_Supplement'), 'flip');
    var user = $("#profile_name").val();
    insertUser(user, callback);
    //$(".addSupUserName").html(addSupplementHeadingStart + user + addSupplementHeadingEnd);
    return false;
  });

  // Need to delete all content for testing purposes or load some dummy data?  THIS IS BUGGY
  $("#resetUserData").click(function(){
    clearDatabaseContent(removeUserOptions);
    addUserOptionsError();
  });

  // Function to load some sample data.  THIS IS BUGGY
  $("#populateUserData").click(function(){
    clearDatabaseContent(prepopulateDatabase);
    updateUserListings();
  });

  $("#EmailChecked").bind('click', function(e) {
    e.preventDefault();
    var mailto = '';
    var subject = 'My Dietary Supplement Profiles';
    var body = $("#emailContent").text();
    emailThis(mailto,subject,body);
    return false;
  });


});