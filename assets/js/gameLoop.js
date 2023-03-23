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
document.getElementById("idButtonName1").addEventListener(fnUpdateThing1());
document.getElementById("idButtonName2").addEventListener(fnUpdateThing2());
document.getElementById("idButtonName3").addEventListener(fnUpdateThing3());
document.getElementById("idButtonName4").addEventListener(fnUpdateThing4());

function fnUpdateThing1(){
    objPet.updateThing1();
};
function fnUpdateThing2(){
    objPet.updateThing2();
};
function fnUpdateThing3(){
    objPet.updateThing3();
};
function fnUpdateThing4(){
    objPet.updateThing4();
};
//event timer
function updateMaxTimer(){
    //integer value from (percentage)floats * max Possible timer value
    intMaxTime = Math.round(objPet.intMaxTime * (1-objPet.fBoredom) * (1-objPet.fThirst) * (1-objPet.fHunger) * objPet.happiness);
};
function fnUpdatePet(){
    objPet.boredom += fIncrease; //everything increases with every timer tick
    objPet.thirst += fIncrease;
    objPet.hunger += fIncrease;
    objPet.Happiness -= fIncrease; //except happiness and health which decreases
    objPet.Health-= fIncrease;
    //check death condition
    if (dead){
        window.location="deathScreen.html";
    }
};
function fnUpdateDisplay(){    //Interface Updates
    document.getElementById("idDisplayName1").style.width = objPet.thing1Value * document.getElementById("idDisplayName1").style.maxWidth;
    document.getElementById("idDisplayName2").style.width = objPet.thing2Value * document.getElementById("idDisplayName2").style.maxWidth;
    document.getElementById("idDisplayName3").style.width = objPet.thing3Value * document.getElementById("idDisplayName3").style.maxWidth;
    document.getElementById("idDisplayName4").style.width = objPet.thing4Value * document.getElementById("idDisplayName4").style.maxWidth;
    document.getElementById("idTimerDisplay").style.value = intTimer; //add formatting if needed

    document.getElementById("idTimerDisplay").value = objPet.age; //add formatting if needed
};
function doTime(){
    intTimer -=1;
    elTimer.value = intTimer; //maybe needs formatting too
    objPet.age += 1; //update age of pet
    if (intTimer <= 0){ //timer reaches zero :- Update pet properties
        fnUpdatePet(); //increase hunger, thirst, boredom, decrease health and happiness
        fnUpdateDisplay(); //include timer and age in this function
    };
    setInterval(doTime, 1000); //run timer check every 1 second
};
function start(){
    makePet(); //instantiate pet
    fnUpdateDisplay(); //draw display values
    setInterval(doTime, 1000); //start the game loop
};

