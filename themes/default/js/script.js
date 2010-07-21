$(document).ready(function() {

  // Initialize and setup database
  var db;
  initDB();
  setupDatabaseTables();

  if (IsiPad == true) {
    $('.hideOniPad').hide();
  }

  setPageHeight();
  $('div.thisisapage').bind('pageAnimationStart', function(){
    var height = $(this).height();
    setPageHeight(height);
  });

  /*if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    if(window.applicationCache.update()) {
      alert('updatedS');
    }
    if(window.applicationCache.swapCache()) {
      alert('next');
    }
  }*/

  /* Not used in our application / Setup listeners for the main settings page
  $("#mainSettings").submit(saveMainSettings);
  $("#mainSettings").bind('pageAnimationStart', loadMainSettings); */

  // Create a profile record and return to the "Profiles" page
  $(".submitProfile").bind('click', function(){
    var callback = jQT.goTo($('#Profiles'), 'flip');
    createProfile(callback);
  });
  
  $("#addSupUserName").html(addSupplementHeadingDefault);

  // Listen to the "Add Dietary Supplement" on an existing "Profile" page
  $(".addSupplement").bind('click', function(){
    $("#addSupUserName").html(addSupplementHeadingStart +
      $(".currentUser").html() + addSupplementHeadingEnd);
  });

  // Add a new user record
  $(".submitUser").bind('click', function(){
    var user = $("#profile_name").val();
    insertUser(user);
    jQT.goTo($('#Profiles'), 'flip');
    return false;
  });

  // Listen to the "Add Dietary Supplement" button on the "Add Profile" page
  $(".sumbitUserSubmitProfile").bind('click', function(){
    var user = $("#profile_name").val();
    insertUser(user);
    jQT.goTo($('#Add_Dietary_Supplement'), 'flip');
    return false;
  });

  /*  Listen to the "Add Dietary Supplement" button on the "Add Profile" page
  $(".sumbitUserSubmitProfile").bind('click', function(){
    var callback = jQT.goTo($('#Add_Dietary_Supplement'), 'flip');
    var user = $("#profile_name").val();
    insertUser(user, callback);
    //$(".addSupUserName").html(addSupplementHeadingStart + user + addSupplementHeadingEnd);
    return false;
  }); */

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

  $('.saveUserName').bind('click', function() {
    var uid = $("#updateUserUID").attr('name');
    var user = $("#updateUserName").val();
    updateUserName(uid,user);
    resetAddProfileForm();
    jQT.goTo($('#Profiles'), 'flip');
  });

  $('#Add_Dietary_Supplement a').bind('click', resetAddProfileForm);

  $('#Email_Profile').bind('pageAnimationStart',getAllProfiles);

  $('#Email_Profile').bind('pageAnimationEnd', function(){
    var mail = 'mailto:?';
    var subject = 'My Dietary Supplement Profiles';
    var body = $("#emailProfiles").text();
    mail += 'subject=' + encodeURIComponent(subject);
    mail += '&body=' + encodeURIComponent(body);
    $("#EmailChecked").attr('href',mail);
    //alert(mail);
  });

  $('.savePassword').click(function(){
    var p1 = $.trim($('#password1').val());
    var p2 = $.trim($('#password2').val());

    if(p1 == '') {
      $('.error').text('Please Enter a Password.');
      return;
    }
    if(p1.length < 4) {
      $('.error').text('Password must be at least 4 characters long.');
      return;
    }
    if(p1 != p2) {
      $('.error').text('Passwords do not match.');
      return;
    }
    updatePassword(p1);
    //return false;
  });

  // All Accordion related listeners and setup
  $("#Instructions").bind('pageAnimationStart', function(){
    $('#accordion .expandable').hide();
  });
  
  $('#accordion h2').click(function(){
    goAccordion($(this));
  });


  $(".instructProfileRef").click(function(){
    jQT.goTo($('#Instructions'), 'flip');
    goAccordion($('#accordion #instructProfile'));
  });
  $(".instructEmailRef").click(function(){
    jQT.goTo($('#Instructions'), 'flip');
    goAccordion($('#accordion #instructEmail'));
  });
  $(".instructPhotoRef").click(function(){
    jQT.goTo($('#Instructions'), 'flip');
    goAccordion($('#accordion #instructPhoto'));
  });
  $(".instructPasswordRef").click(function(){
    jQT.goTo($('#Instructions'), 'flip');
    goAccordion($('#accordion #instructPassword'));
  });
  $(".instructVisitODSRef").click(function(){
    jQT.goTo($('#Instructions'), 'flip');
    goAccordion($('#accordion #instructVisitODS'));
  });
  $(".instructDSresourcesRef").click(function(){
    jQT.goTo($('#Instructions'), 'flip');
    goAccordion($('#accordion #instructDSresources'));
  });
  

  // Add dietary supplement page's profile button
  $("#profileGOTOaddDS").bind('click',function(){
    $("#addDSProfileBtn").html('Profile').attr('href','#Profile');
  });
  $("#Add_Dietary_Supplement a").bind('click', function(){
    $("#addDSProfileBtn").html('Profiles').attr('href','#Profiles');
  });

  $(".updateThisSupplement").bind('click',function(){
    var uid = $("#user_select_update").val();
    var sid = $("#supplement_update").attr('name');
    var pid = $("#updateSupplement").attr('name');
    var user = $("#user_select_update").text();
    var supplement = $("#supplement_update").val();
    var amount = $("#amount_update").val();
    var unit = $("#unit_update").val();
    var frequency = $("#frequency_update").val();
    var frequency_unit = $("#frequency_unit_update").val();
    var notes = $("#notes_update").val();
    var img_01 = $("#imageOne_update").attr('src');
    var img_02 = $("#imageTwo_update").attr('src');
    updateProfile(user,uid,sid,pid,supplement,amount,unit,frequency,frequency_unit,notes,img_01,img_02);
  });


  $("#updateUser").click(function(){
    jQT.goTo($('#Update_Profile'), 'flip');
  });


  /* Trying out better ways to relate to the db
  // This is the error handler for all database transactions
  function DBerror(errorMsg,transaction,error) {
    alert('Database Error: ' + error.message + ' (Code '+error.code+')' + "\n\n" +
    'Message: ' + errorMsg);
    return true;
  }

  function DBquery(query, data, callback, message) {
    db.transaction(function(transaction,result){
      transaction.executeSql(query, data, function(result){
        if (callback != null) {
          if( eval('typeof ' + callback) == 'function') {
            callback(result);
          } else {
            alert('Your database query callback is not a valid function!');
          }
        }
      }, DBerror(message));
    });
    return false;
  }

  var thisquery = "SELECT * FROM `user` WHERE `id`=?;";
  var thisdata = new Array("1");
  var thismessage = 'howdy world';
  function thiscallback(result) {
    alert('hi there');
    //alert(result.insertId);
  }
  DBquery(thisquery,thisdata,thiscallback,thismessage);
  */

  $('.inputImg').toggle(function(){
    $(this).animate({
      width: 210,
      height: 240
    }, 'slow');
    $(this).siblings().animate({
      width: 40,
      height: 40
    },'slow');
  }, function(){
    $(this).animate({
      width: 80,
      height: 80
    }, 'fast');
    $(this).siblings().animate({
      width: 80,
      height: 80
    },'slow');
  });

//$("#Profiles").bind('pageAnimationStart',updateUserLists);
  updateUserLists();

});