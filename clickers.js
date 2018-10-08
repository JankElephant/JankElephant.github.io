function dyAlt() {
  // alert("Did");
  var mainthing = document.getElementById("txtfield");
  var otherthing = document.getElementById("dyHead");
  var stringCont = mainthing.value
  var newString = ""
  for (var x = 0; x < stringCont.length; x++){
    if (x % 2 === 0) {
      newString = newString + (stringCont.charAt(x)).toUpperCase();
    } else {
      newString = newString + (stringCont.charAt(x)).toLowerCase();
    }
  }
  otherthing.innerHTML = newString;
}
