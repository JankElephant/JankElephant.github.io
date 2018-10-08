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
  var descline = document.getElementById(name.id + "descript");
  // console.log(mainthing);
  name.classList.toggle("active");
  // if (mainthing.style.display === "none") {
  // console.log(mainthing.style.maxHeight);
  if (mainthing.style.maxHeight === "0px") {
    // mainthing.style.display = "block";
    mainthing.style.overflow = "visible";
    mainthing.style.maxHeight = "100%";
    // mainthing.style.margin = "0"''
    descline.style.display = "block";
    // mainthing.style.margin = "0 0 50px 0";
  } else {
    // mainthing.style.display = "none";
    // mainthing.style.margin = "0";
    mainthing.style.maxHeight = "0px";
    mainthing.style.overflow = "hidden";

    descline.style.display = "none";
  }
}

populate_checks();
