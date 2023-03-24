// pet.health.getValue();
// pet.health.normalise();
// pet.health.increaseBy();
// pet.health.decreaseBy();

// const pet = new MantisShrimp(petName);


//Globals
const objPet={};
let intTimer = 0; //the value of the count-down counter
let intMaxTime = 0; //the max time that the countdown counter can be set to
let fIncrease = 0.1; //amount to alter stats by after each timer tick
let intAge = 0; //age of creature

document.onload = (() => {
    start();
});

//Instance Object
//instantiate pet based on user input
function makePet(){    
    console.log("makepet");
    let strName= localStorage.getItem("name");
    let strType =localStorage.getItem("type");
    
    const pet = {};
    switch (strType) {
        case "SunFish":
            pet = new Sunfish(strName);
            break;
        case "Shrimp":
            pet = new MantisShrimp(strName);
            break;
        case "TriggerFish":
            pet = new TriggerFish(strName);
            break;
        case "Crab":
            pet = new Crab(strName);
            break;
    };
    intMaxTime = pet.maxTime.getValue();
    intTimer = intMaxTime;
    return pet;
};

// Button Code
//react to button presses by calling appropriate update methods of objPet
document.getElementById("idFeed").addEventListener("click", updateHunger());
document.getElementById("idSpecial").addEventListener("click", updateSpecial());
document.getElementById("idPlay").addEventListener("click", updateBoredom());
document.getElementById("idPet").addEventListener("click", updateHappiness());

function updateHunger(){
    objPet.hunger.decreaseBy(10);
    increaseHealth(10);
    updateMaxTimer();
};
function updateSpecial(){
    objPet.special.increaseBy(10);
    increaseHealth(10);
    updateMaxTimer();
};
function updateBoredom(){
    objPet.boredom.decreaseBy(10);
    increaseHealth(10);
    updateMaxTimer();
};
function updateHappiness(){
    objPet.happiness.increaseBy(10);
    increaseHealth(10);
    updateMaxTimer();
};
function increaseHealth(intAmount){
    objPet.health.increaseBy(intAmount);
    updateMaxTimer();
};
//event timer
function updateMaxTimer(){
    //integer value from (percentage)floats * max Possible timer value
    intMaxTime = Math.min(Math.round(objPet.maxTime.getValue() * objPet.boredom.normalise() * objPet.hunger.normalise() * objPet.happiness.getValue()), 100);
    intTimer = intMaxTime;
    //document.getElementById(idTimer).value = intTimer; //no longer displaying timer
};
function updatePet(){
    objPet.boredom.increaseBy(fIncrease); //everything increases with every timer tick
    objPet.hunger.increaseBy(fIncrease);
    objPet.happiness.decreaseBy(fIncrease); //except happiness and health which decreases
    objPet.health.decreaseBy(fIncrease);
    //check death condition
    if (objPet.health.getValue() <= 0){
        window.location="deathScreen.html";
    };
};
function updateDisplay(){    //Interface Updates
    document.getElementById("idHunger").style.width = objPet.hunger.normalise() * document.getElementById("idHunger").style.maxWidth;
    document.getElementById("idBoredom").style.width = objPet.boredom.normalise() * document.getElementById("idBoredom").style.maxWidth;
    document.getElementById("idHappiness").style.width = objPet.happiness.getValue() * document.getElementById("idHappiness").style.maxWidth;
    document.getElementById("idHealth").style.width = objPet.health.getvalue() * document.getElementById("idHealth").style.maxWidth;
    document.getElementById("idAge").value = intAge; //add formatting if needed
};
function doTime(){
    intTimer -=1000;
    intAge.increaseBy(1); //update age of pet
    if (intTimer <= 0){ //timer reaches zero :- Update pet properties
        updatePet(); //increase hunger, thirst, boredom, decrease health and happiness
        updateDisplay(); //include timer and age in this function
        intTimer = intMaxTime;
    };
    //document.getElementById(idTimer).value = intTimer; //maybe needs formatting too
    setInterval(doTime, 1000); //run timer check every 1 second
};
function start(){
    console.log("Start");
    objPet = makePet(); //instantiate pet
    updateDisplay(); //draw display values
    doTime(); //start the game loop
};

