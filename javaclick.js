function populate_checks() {
  // Checkmark what is found to be checked in local storage
  var boxes = document.querySelectorAll("input[type=checkbox]");
  for (var i = 0; i < boxes.length; i++){
    if (localStorage.getItem(boxes[i].id) !== null){
      boxes[i].checked = true;
    }
  }
}

function mark_checked(item){
  // Store checkbox changes in local storage
  if (localStorage.getItem(item.id) === null) {
    localStorage.setItem(item.id, "checked");
  } else {
    localStorage.removeItem(item.id);
  }
}
populate_checks();
