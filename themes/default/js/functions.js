function saveMainSettings() {
  localStorage.age = $('#age').val();
  localStorage.budget = $('#budget').val();
  localStorage.weight = $('#weight').val();
  jQT.goBack();
  return false;
}

function loadMainSettings() {
    $('#age').val(localStorage.age);
    $('#budget').val(localStorage.budget);
    $('#weight').val(localStorage.weight);
}