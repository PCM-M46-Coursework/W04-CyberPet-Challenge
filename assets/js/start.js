let strType = "DecoratorCrab";
const btnStartGame = document.querySelector('#btnStartGame');

// ===============================================================
//  PET SELECTION
// ===============================================================

const groups = document.querySelectorAll('.creature-group');
groups.forEach(x => {
    x.addEventListener('click', function () {
        groups.forEach(y => y.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById("DecoratorCrab").addEventListener("click", () => {
    strType = "DecoratorCrab";
    console.log(strType);
});

document.getElementById("MantisShrimp").addEventListener("click", () => {
    strType = "MantisShrimp";
    localStorage.setItem("type", strType);
    console.log(strType);
});

document.getElementById("Sunfish").addEventListener("click", () => {
    strType = "Sunfish";
    console.log(strType);
});

document.getElementById("Triggerfish").addEventListener("click", () => {
    strType = "Triggerfish";
    console.log(strType);
});

// ===============================================================
//  PET NAME
// ===============================================================

document.querySelector('#txtPetName').addEventListener('input', function ()
{
    if (this.value.length === 0) {
        btnStartGame.setAttribute('disabled');
    } else {
        btnStartGame.removeAttribute('disabled');
    }
});

// ===============================================================
//  START GAME
// ===============================================================

btnStartGame.addEventListener("click", function() {
    let strName = document.getElementById("txtPetName").value;

    if (strName.length < 1) {
      alert("Please type in the name of your pet");
      return false;
    }
  
    localStorage.setItem("petName", strName);
    localStorage.setItem("creatureType", strType);
    btnStartGame.innerText = 'Launching...';
    setTimeout(() => window.location = "./game-play.html", 3000);
    //console.log('Saved Type:', localStorage.getItem("type"));
    //console.log('Saved Name:', localStorage.getItem("name"));
});