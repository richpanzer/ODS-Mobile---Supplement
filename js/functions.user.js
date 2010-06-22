// Insert a single user row WORKS
function insertUser(name) {
  if (name.length > 0) {
    var query = "INSERT INTO user (user) VALUES ('" + name + "');";
    dbQuery(query);
  }
}

// Remove all User related DOM lists.
function removeUserOptions() {
  $('#profile_list, #user_select').children().remove().end();
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
        append($('<ul class="edgetoedge"><li><a class="cube" ' +
        'href="#Profile">' + row['user'] + '</a></li></ul>'));
      $('#user_select').
        append($("<option></option>").
          attr("value",row['id']).
          attr("name",row['id']).
          text(row['user']));
    }
  } else {
    addUserOptionsError();
  }
}