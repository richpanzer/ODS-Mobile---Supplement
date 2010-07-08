// Insert a single user row
function insertUser(user, callback) {
  if (user.length > 0) {
    var query = "INSERT INTO user (user) VALUES ('" + user + "');";
    db.transaction(function(transaction,results){
      transaction.executeSql(query, null, function(transaction,results){
        var currentuid = results.insertId;
        updateUserLists(currentuid,user);
        //alert('the uid is ' + currentuid + ' and the user is ' + user);
        //setCurrentUser(currentuid,user);
      }, errorHandler);
    });
  }
  return false;
}

// Set the current active user
function setCurrentUser(uid,user) {
  //$(".userSelectToggle").css("opacity","0.25")
  $(".userSelectToggle").hide();
  $(".currentUser").html(user);
  $("#user_select").val(uid);
  $("#updateUserUID").attr('name',uid);
  $("#updateUserName").val(user);
}

// update a single user
function updateUserName(uid,user) {
  var query = "UPDATE `user` SET `user`='" + user +"' WHERE `id`='" + uid + "';";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function(transaction, results) {
      updateUserLists(results,uid,user);
    }, errorHandler);
  });
}

// Add the error message for "There are no users" in this box/select/whatever
function addUserOptionsError() {
  $('#profile_list').append($('<ul class="rounded"></ul>'));
  $('#profile_list ul').
    append($('<li></li>').
    attr("value",noUsersError).
    text(noUsersError));
  $('#user_select').
    append($("<option></option>").
    attr("value",noUsersError).
    text(noUsersError));
}

// Generic function used for SELECT queries with a return argument WORKS
function updateUserLists(currentuid,currentuser) {
  var query = "SELECT * FROM `user`;";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function(transaction, results) {
      updateUserDOM(results,currentuid,currentuser);
    }, errorHandler);
  });
}

// Update DOM to show any changes in users added or deleted WORKS
function updateUserDOM(results,currentuid,currentuser) {
  if (results.rows.length > 0) {
    removeUserOptions();
    for (var i=0; i<results.rows.length; i++) {
      var row = results.rows.item(i);
      $('#profile_list').
        append($('<ul class="edgetoedge"><li class="arrow"><a title="' +
        row['id'] + '" href="#Profile">' + row['user'] + '</a></li></ul>'));
      $('#user_select').
        append($("<option></option>").
          attr("value",row['id']).
          attr("name",row['id']).
          text(row['user']));
    }
    registerNewUserDOM(currentuid,currentuser);
  } else {
    addUserOptionsError();
  }
}

function registerNewUserDOM(currentuid,currentuser) {
  // Add Profile List Listeners for new DOM items
  $('#profile_list ul li a').bind("click", function(){
    removeUserSupplementDOM();
    var uid = $(this).attr('title');
    var user = $(this).html();
    $(".currentUser").html(user);//.attr('title',uid);
    $("#addSupUserName").html(addSupplementHeadingUserStart + user + addSupplementHeadingUserEnd);
    setCurrentUser(uid,user);
    getSupplementList(uid);
  });
  if (currentuser) {
    $("#addSupUserName").html(addSupplementHeadingUserStart + currentuser + addSupplementHeadingUserEnd);
    setCurrentUser(currentuid,currentuser);
  }
  removeUserSupplementDOM();
  //removeUserOptions();
  $('form input, form textarea').clearForm();
}

// Remove all Supplement Entries for a profile from DOM
function removeUserSupplementDOM() {
  $('#profile_entries').children().remove().end();
}

// Remove all User related DOM lists.
function removeUserOptions() {
  $("#profile_name").val('');
  $('#profile_list, #user_select').children().remove().end();
}