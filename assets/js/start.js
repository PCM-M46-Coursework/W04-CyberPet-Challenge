startButton = document.getElementById("idStart");
startButton.addEventListener("click", startGame());

function startGame(){
    localStorage.setItem("name", document.getElementById("idName").value);
    localStorage.setItem("type", document.getElementById("idType").value);//or whatever to get the data
    window.location = "MainGame.html"; //or whatever it's called
}