let strType = "";
console.log("script loaded");
document.getElementById("idStart").addEventListener("click", startGame);

document.getElementById("idSunfish").addEventListener("click", () => {
  strType = "Sunfish";
  localStorage.setItem("type", strType);
  console.log(strType);
});
document.getElementById("idShrimp").addEventListener("click", () => {
  strType = "Shrimp";
  localStorage.setItem("type", strType);
  console.log(strType);
});
document.getElementById("idTriggerfish").addEventListener("click", () => {
  strType = "TriggerFish";
  localStorage.setItem("type", strType);
  console.log(strType);
});
document.getElementById("idCrab").addEventListener("click", () => {
  strType = "Crab";
  localStorage.setItem("type", strType);
  console.log(strType);
});

function startGame() {
  console.log("StartGame");
  if (strType.length < 1) {
    alert("Please choose a pet");
    return false;
  }
  let strName = document.getElementById("idName").value;
  if (strName.length < 1) {
    alert("Please type in the name of your pet");
    return false;
  }

  localStorage.setItem("name", strName);
  window.location = "play.html"; //or whatever it's called
}
