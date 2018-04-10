function populate_checks() {
  // Checkmark what is found to be checked in local storage
  var boxes = document.querySelectorAll("div[class=item-box]");
  for (var i = 0; i < boxes.length; i++){
    if (localStorage.getItem(boxes[i].id) !== null){
      boxes[i].style.opacity = 0.2;
    }
  }
}

function mark_checked(item){
  // Store checkbox changes in local storage
  if (localStorage.getItem(item.id) === null) {
    localStorage.setItem(item.id, "checked");
    item.style.opacity = 0.2;
  } else {
    localStorage.removeItem(item.id);
    item.style.opacity = 1;
  }
}
populate_checks();
