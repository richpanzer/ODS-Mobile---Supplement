// Insert a single user row
function insertUser(user) {
  if (user.length > 0) {
    var query = "INSERT INTO user (user) VALUES ('" + user + "');";
    db.transaction(function(transaction,results){
      transaction.executeSql(query, null, function(results){
        var cuid = results.insertId;
        //alert('the uid is ' + cuid + ' and the user is ' + user);
        updateUserLists(cuid,user);
        setCurrentUser(cuid,user);
      }, errorHandler);
    });
  }
  return false;
}

// update a single user
function updateUserName(cuid,cuser) {
  var query = "UPDATE `user` SET `user`='" + cuser +"' WHERE `id`='" + cuid + "';";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function() {
      updateUserLists(cuid,cuser);
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
function updateUserLists(cuid,cuser) {
  alert("Updating List of Users");
  var query = "SELECT * FROM `user`;";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function(transaction, results) {
      updateUserDOM(results,cuid,cuser);
    }, errorHandler);
  });
}

// Update DOM to show any changes in users added or deleted WORKS
function updateUserDOM(results,cuid,cuser) {
  removeUserSupplementDOM();
  removeUserOptions();
  if (results.rows.length > 0) {
    for (var i=0; i<results.rows.length; i++) {
      var row = results.rows.item(i);
      $('#profile_list').
        append($('<ul class="edgetoedge"><li class="arrow"><a title="' +
        row['id'] + '" href="#">' + row['user'] + '</a></li></ul>'));
      $('#user_select').
        append($("<option></option>").
          attr("value",row['id']).
          attr("name",row['id']).
          text(row['user']));
    }
    registerNewUserDOM(cuid,cuser);
  } else {
    addUserOptionsError();
  }
}

function registerNewUserDOM(cuid,cuser) {
  // Add Profile List Listeners for new DOM items
  $('#profile_list ul li a').bind("click", function(e){
    e.preventDefault();
    //$('form input, form textarea').clearForm();
    removeUserSupplementDOM();
    var uid = $(this).attr('title');
    var user = $(this).html();
    $("#user_select").val(uid);
    setCurrentUser(uid,user);
    getSupplementList(uid);
    jQT.goTo($('#Profile'), 'flip');
    return false;
  });
  if ((!isNaN(cuid)) && (cuser != undefined)) {
    setCurrentUser(cuid,cuser);
    getSupplementList(cuid);
    //alert('the uid is ' + cuid + ' and the user is ' + cuser);
  }
}

// Set the current active user
function setCurrentUser(uid,user) {
  // Used for updating user name for a profile
  $("#updateUserName").val(user);
  $("#updateUserUID").attr('name',uid);
  $(".userSelectToggle").css("opacity","0.25")
  //$(".userSelectToggle").hide();
  $(".currentUser").html(user);
  $("#user_select").val(uid);
  $("#addSupUserName").html(addSupplementHeadingUserStart + user + addSupplementHeadingUserEnd);
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