function displayForm() {
  var humanForm = document.getElementById("addDetails");
  humanForm.style.display = "block";
}
function checkIsAlive() {
  var deadDate = document.getElementById("deadDate");
  var checkbox = document.querySelector("#isAlive");
  if ((checkbox.checked = true)) console.log("yes");
  else console.log("no");
}
