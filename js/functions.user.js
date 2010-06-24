// Insert a single user row WORKS
function insertUser(user, callback) {
  if (user.length > 0) {
    var query = "INSERT INTO user (user) VALUES ('" + user + "');";
    dbQuery(query);
    updateUserLists();
    //allPurposeDBQuery(insertProfileQuery, updateUserLists, errorHandler);
  }
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
function updateUserLists() {
  var query = "SELECT * FROM `user`;";
  db.transaction(function(transaction) {
    transaction.executeSql(query, [], function(transaction, results) {
      updateUserDOM(results);
    }, errorHandler);
  });
}

// Update DOM to show any changes in users added or deleted WORKS
function updateUserDOM(results) {
  if (results.rows.length > 0) {
    removeUserOptions();
    for (var i=0; i<results.rows.length; i++) {
      var row = results.rows.item(i);
      $('#profile_list').
        append($('<ul class="edgetoedge"><li><a class="cube" title="' +
        row['id'] + '" href="#Profile">' + row['user'] + '</a></li></ul>'));
      $('#user_select').
        append($("<option></option>").
          attr("value",row['id']).
          attr("name",row['id']).
          text(row['user']));
    }
    registerNewUserDOM();
  } else {
    addUserOptionsError();
  }
}

function registerNewUserDOM() {
  $('#profile_list ul li a').bind("click", function(){
    var uid = $(this).attr('title');
    var user = $(this).html();
    removeUserSupplementDOM();
    $('form input').clearForm();
    getSupplementList(uid);
    $(".currentUser").html(user);


    if (0 == 0) {
      var useroption = $("#user_select option[text="+ user + "]");
      uid = useroption.val();
    }
    
    alert('the uid is: ' + uid);
    $("#user_select").val(uid);
  });
}

// Remove all Supplement Entries for a profile from DOM
function removeUserSupplementDOM() {
  $('#profile_entries').children().remove().end();
}

// Remove all User related DOM lists.
function removeUserOptions() {
  $('#profile_list, #user_select').children().remove().end();
}