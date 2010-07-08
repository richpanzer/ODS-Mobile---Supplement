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

  $('#Email_Profile').bind('pageAnimationStart', getAllProfiles);
  
  $('.saveUserName').bind('click', function() {
    var uid = $("#updateUserUID").attr('name');
    var user = $("#updateUserName").val();
    updateUserName(uid,user);
    jQT.goTo($('#Profiles'), 'flip');
  });

  $('#Add_Dietary_Supplement a').bind('click', resetAddProfileForm);



  $("#EmailChecked").bind('click', function(e) {
    e.preventDefault();
    var mailto = '';
    var subject = 'My Dietary Supplement Profiles';
    var body = $("#emailProfiles").text();
    emailThis(mailto,subject,body);
    return false;
  });

  
  // This is needed for the toolbar to function correctly
  voidClick($("#Profiles .toolbar_bottom a").eq(1));
  voidClick($("#Add_Dietary_Supplement .toolbar_bottom a").eq(2));
  voidClick($("#Learn_About_ODS .toolbar_bottom a").eq(3));
  voidClick($("#Tips .toolbar_bottom a").eq(4));

  // All Accordion related listeners and setup
  $('#accordion .expandable').hide();
  $('#Instructions a').click(function(){
    $('#accordion .expandable').hide();
  });

  $('#accordion h2').click(function(){
    goAccordion($(this));
  });
  $(".instructProfileRef").click(function(){
    goAccordion($('#accordion #instructProfile'));
  });
  $(".instructEmailRef").click(function(){
    goAccordion($('#accordion #instructEmail'));
  });
  $(".instructPasswordRef").click(function(){
    goAccordion($('#accordion #instructPassword'));
  });

  // Add dietary supplement page's profile button
  $("#profileGOTOaddDS").click(function(){
    $("#addDSProfileBtn").html('Profile').attr('href','#Profile');
  });

  $("#Add_Dietary_Supplement a").click(function(){
    $("#addDSProfileBtn").html('Profiles').attr('href','#Profiles');
  });

  $(".updateThisSupplement").bind('click',function(){
    var callback = jQT.goTo($('#Profile'), 'fade');
    var uid = $("#user_select_update").val();
    var sid = $("#supplement_update").attr('name');
    var pid = $("#updateSupplement").attr('name');
    var user = $("#user_select_update").val();
    var supplement = $("#supplement_update").val();
    var amount = $("#amount_update").val();
    var unit = $("#unit_update").val();
    var frequency = $("#frequency_update").val();
    var notes = $("#notes_update").val();
    var myimg = 'Placeholder';
    updateProfile(callback,uid,sid,amount,unit,frequency,notes,myimg);
  });


});