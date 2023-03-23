// Globals
let objPet = {}; //the pet
let intTimer = 0; //the value of the on-screen count-down counter
let intMaxTime = 0; //the max time that the countdown counter can be set to
let fIncrease = 0.1; //amount to alter stats by after each timer tick

document.onload = (() => {
    start();
});

//Instance Object
//instantiate pet based on user input
function makePet(){    
    console.log("makepet");
    let strName= localStorage.getItem("name");
    let strType =localStorage.getItem("type");
    switch (strType) {
        case "SunFish":
            objPet = new clsSunfish(strName);
            break;
        case "Shrimp":
            objPet = new clsShrimp(strName);
            break;
        case "TriggerFish":
            objPet = new clsTriggerFish(strName);
            break;
        case "Crab":
            objPet = new clsCrab(strName);
            break;
    };
    intMaxTime = objPet.intMaxTime;
    intTimer = intMaxTime;
};

// Button Code
//react to button presses by calling appropriate update methods of objPet
document.getElementById("idFeed").addEventListener("click", fnUpdateHunger());
document.getElementById("idWater").addEventListener("click", fnUpdateThirst());
document.getElementById("idPlay").addEventListener("click", fnUpdateBoredom());
document.getElementById("idPet").addEventListener("click", fnUpdateHappiness());

function fnUpdateHunger(){
    objPet.UpdateHunger();
    IncreaseHealth();
    updateMaxTimer();
};
function fnUpdateThirst(){
    objPet.UpdateThirst();
    IncreaseHealth();
    updateMaxTimer();
};
function fnUpdateBoredom(){
    objPet.UpdateBoredom();
    IncreaseHealth();
    updateMaxTimer();
};
function fnUpdateHappiness(){
    objPet.UpdateHappiness();
    IncreaseHealth();
    updateMaxTimer();
};
function IncreaseHealth(){
    objPet.IncreaseHealth();
    updateMaxTimer();
};
//event timer
function updateMaxTimer(){
    //integer value from (percentage)floats * max Possible timer value
    intMaxTime = Math.round(objPet.intMaxTime * (1.1-objPet.Boredom) * (1.1-objPet.Thirst) * (1.1-objPet.Hunger) * (objPet.happiness +0.1));
    intTimer = intMaxTime;
    document.getElementById(idTimer).value = intTimer;
};
function fnUpdatePet(){
    objPet.boredom += fIncrease; //everything increases with every timer tick
    objPet.thirst += fIncrease;
    objPet.hunger += fIncrease;
    objPet.Happiness -= fIncrease; //except happiness and health which decreases
    objPet.Health -= fIncrease;
    //check death condition
    if (objPet.Health <= 0){
        window.location="deathScreen.html";
    };
};
function fnUpdateDisplay(){    //Interface Updates
    document.getElementById("idHunger").style.width = objPet.Hunger * document.getElementById("idHunger").style.maxWidth;
    document.getElementById("idThirst").style.width = objPet.Thirst * document.getElementById("idThirst").style.maxWidth;
    document.getElementById("idBoredom").style.width = objPet.Boredom * document.getElementById("idBoredom").style.maxWidth;
    document.getElementById("idHappiness").style.width = objPet.Happiness * document.getElementById("idHappiness").style.maxWidth;
    document.getElementById("idHealth").style.width = objPet.Health * document.getElementById("idHealth").style.maxWidth;

    document.getElementById("idTimerDisplay").style.value = intTimer; //add formatting if needed
    document.getElementById("idAge").value = objPet.age; //add formatting if needed
};
function doTime(){
    intTimer -=1;
    objPet.age += 1; //update age of pet
    if (intTimer <= 0){ //timer reaches zero :- Update pet properties
        fnUpdatePet(); //increase hunger, thirst, boredom, decrease health and happiness
        fnUpdateDisplay(); //include timer and age in this function
        intTimer = intMaxTime;
    };
    document.getElementById(idTimer).value = intTimer; //maybe needs formatting too
    setInterval(doTime, 1000); //run timer check every 1 second
};
function start(){
    console.log("Start");
    makePet(); //instantiate pet
    fnUpdateDisplay(); //draw display values
    setInterval(doTime, 1000); //start the game loop
};

