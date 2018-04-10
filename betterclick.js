function populate_checks() {
  // Checkmark what is found to be checked in local storage
  var boxes = document.querySelectorAll("div[class=item-box]");
  for (var i = 0; i < boxes.length; i++) {
    if (localStorage.getItem(boxes[i].id) !== null) {
      boxes[i].style.opacity = 0.2;
      if (localStorage.getItem("hide_checked") !== null) {
        boxes[i].style.display = "none";
      }
    }
  }
}

function mark_checked(item) {
  // Store checkbox changes in local storage
  if (localStorage.getItem(item.id) === null) {
    localStorage.setItem(item.id, true);
    item.style.opacity = 0.2;
    if (localStorage.getItem("hide_checked") !== null) {
      item.style.display = "none";
    }
  } else {
    localStorage.removeItem(item.id);
    item.style.opacity = 1;
  }
}

function toggle_hide() {
  // Toggle hiding of checked items
  var boxes = document.querySelectorAll("div[class=item-box]");
  if (localStorage.getItem("hide_checked") === null) {
    localStorage.setItem("hide_checked", true);
    for (var i = 0; i < boxes.length; i++) {
      if (localStorage.getItem(boxes[i].id) !== null) {
        boxes[i].style.display = "none";
      }
    }
  } else {
    localStorage.removeItem("hide_checked");
    for (var i = 0; i < boxes.length; i++) {
      if (localStorage.getItem(boxes[i].id) !== null) {
        boxes[i].style.display = "block";
      }
    }
  }
}

function hide_thing(name) {
  var mainthing = document.getElementById(name.id + "-holder");
  if (mainthing.style.display === "none") {
    mainthing.style.display = "flex";
  } else {
    mainthing.style.display = "none";
  }
}

populate_checks();
