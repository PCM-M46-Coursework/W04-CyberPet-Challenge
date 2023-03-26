import "./src/prototype/Number.prototype.js";
import { MantisShrimp } from "./src/objects/MantisShrimp.js";
import { DecoratorCrab } from "./src/objects/DecoratorCrab.js";
import { Triggerfish } from "./src/objects/Triggerfish.js";
import { Sunfish } from "./src/objects/Sunfish.js";
import { soundManager } from "./src/objects/SoundManager.js";

//Globals
let intTimer = 0; //the value of the count-down counter
let intMaxTime = 0; //the max time that the countdown counter can be set to
let fIncrease = 1; //amount to alter stats by after each timer tick
let intClickValue = 5; //amount to alter stats by after each timer tick
let fOverallMultiplier = 1;
let intAge = 0; //age of creature

// ===============================================================
//  PAGE ELEMENTS
// ===============================================================

const barHealth = document.querySelector('#idHealthBar');
const barHunger = document.querySelector('#idHungerBar');
const barBoredom = document.querySelector('#idBoredomBar');
const barHappiness = document.querySelector('#idHappinessBar');

const btnSpecialAbility = document.querySelector('#btnSpecialAbility');
const btnTerminate = document.querySelector('#btnTerminate');
const btnHunger = document.querySelector('#btnHunger');
const btnBoredom = document.querySelector('#btnBoredom');
const btnHappiness = document.querySelector('#btnHappiness');
const allButtons = document.querySelectorAll('button');

const txtSpecialAbility = document.querySelector('#txtSpecialAbility');

// ===============================================================
//  PET SELECTION
// ===============================================================

//Instance Object
//instantiate pet based on user input
function makePet()
{
    let strName = localStorage.getItem("petName");
    let strType = localStorage.getItem("creatureType");

    let pet;
    switch (strType)
    {
        case "Sunfish":
            pet = new Sunfish(strName);
            break;
        case "MantisShrimp":
            pet = new MantisShrimp(strName);
            break;
        case "Triggerfish":
            pet = new Triggerfish(strName);
            break;
        case "DecoratorCrab":
            pet = new DecoratorCrab(strName);
            break;
    }
    localStorage.setItem("creatureName", pet.creatureName);
    intMaxTime = pet.maxTime;
    intTimer = intMaxTime;
    return pet;
}

let objPet = makePet();
localStorage.setItem('pet', objPet);

// ===============================================================
//  UPDATE PET DETAILS
// ===============================================================

document.querySelectorAll('.strPetName').forEach(e => e.innerText = objPet.petName);
document.querySelectorAll('.strCreatureName').forEach(e => e.innerText = objPet.creatureName);

const urlImage = `./assets/img/${objPet.creatureType}.gif`;
document.querySelector('#imgAvatar').src = urlImage;

barHealth.max = objPet.health.getValue();
btnSpecialAbility.innerText = objPet.specialAbilityName;
txtSpecialAbility.innerHTML = `<span>${objPet.specialAbilityDescription}</span>`;

// ===============================================================
//  ON DEATH
// ===============================================================

function onDeath()
{
    clearInterval(timerId);
    allButtons.forEach(btn => btn.toggleAttribute('disabled'));
    soundManager.play('gameOver');
    setTimeout(() => {
        localStorage.setItem('age', intAge);
        console.log('Information Being Passed:');
        console.log('Pet Name:', localStorage.getItem('petName'));
        console.log('Creature Type:', localStorage.getItem('creatureType'));
        console.table('Creature Name:', localStorage.getItem('creatureName'));
        console.log('Age:', localStorage.getItem('age'));
        window.location = "game-over.html"; 
    }, 3000);
}

btnTerminate.addEventListener('click', onDeath);

// ===============================================================
//  SPECIAL ABILITY
// ===============================================================

function updateSpecial()
{
    const value = intClickValue * 10;
    const decrease = (objPet.favouredStat._getInitialValue() > 0);
    console.log('Special Ability', decrease);
    objPet.favouredStat.increaseBy(decrease ? value : -value);
    increaseHealth(value);
    updateMaxTimer();
}

btnSpecialAbility.addEventListener("click", updateSpecial);

// ===============================================================
//  EVENT LISTENERS
// ===============================================================

// Button Code
//react to button presses by calling appropriate update methods of objPet

function increaseHealth(intAmount)
{
    objPet.health.increaseBy(intAmount);
}

btnHunger.addEventListener("click", function()
{
    objPet.hunger.decreaseBy(intClickValue);
    increaseHealth(intClickValue);
});

btnBoredom.addEventListener("click", function()
{
    objPet.boredom.decreaseBy(intClickValue);
    increaseHealth(intClickValue);
});

btnHappiness.addEventListener("click", function()
{
    objPet.happiness.increaseBy(intClickValue);
    increaseHealth(intClickValue);
});

// ===============================================================
//  UPDATE FUNCTIONS
// ===============================================================

//event timer
function updateMaxTimer()
{
    //integer value from (percentage)floats * max Possible timer value
    intMaxTime = objPet.maxTime;
    const timeMultiplier = intAge / objPet.maxTime * 100;
    console.log('Time Mulitiplier:', timeMultiplier);

    // As Hunger goes up, max time comes down.
    const hungerMultiplier = intMaxTime * objPet.hunger.normalise();
    intMaxTime -= hungerMultiplier + timeMultiplier;
    //console.log('After Hunger Multiplier:', intMaxTime);

    // As Boredom goes up, max time comes down.
    const boredomMultiplier = intMaxTime * objPet.boredom.normalise();
    intMaxTime -= boredomMultiplier + timeMultiplier;
    //console.log('After Boredom Multiplier:', intMaxTime);

    // As Happiness goes down, max time comes down.
    const happinessMultiplier = intMaxTime * objPet.happiness.inverseNormalise();
    intMaxTime -= happinessMultiplier + timeMultiplier;
    //console.log('After Happiness Multiplier:', happinessMultiplier);

    fOverallMultiplier = 
        objPet.hunger.normalise() + 
        objPet.boredom.normalise() + 
        objPet.happiness.inverseNormalise() +
        (timeMultiplier / 10);

    intMaxTime = Math.max(intMaxTime, 100); //minimum timer is 1/10 second
    intTimer = intMaxTime;
}

function updatePet()
{
    //console.log('updatePet');

    const healthDrop = fIncrease + (fIncrease * fOverallMultiplier);
    console.log('Health Drop', healthDrop);

    objPet.boredom.increaseBy(fIncrease); //everything increases with every timer tick
    objPet.hunger.increaseBy(fIncrease);
    objPet.happiness.decreaseBy(fIncrease); //except happiness and health which decreases
  
    objPet.health.decreaseBy(healthDrop);

    //check death condition
    if (objPet.health.getValue() <= 0)
    {
        onDeath();
    }
}

function updateDisplay()
{
    barHealth.value = objPet.health.getValue();
    barHunger.value = objPet.hunger.getValue();
    barBoredom.value = objPet.boredom.getValue();
    barHappiness.value = objPet.happiness.getValue();
}

// Left in for posterity. This was how the bars were going
// to be filled, before learning about the HTML5 <meter> tags.
//
// While this approach would have been perfectly valid, and robust,
// it would have meant needing layered syling within the HTML. By
// using the <meter> tag, the only complications are with the CSS.
//
// function updateDisplay()
// {
//     //Interface Updates
//     barHealth.style.width = objPet.health.normalise() * barHealth.style.maxWidth;
//     barHealth.innerText = (objPet.health.normalise() * 100) + '%';
//
//     barHunger.style.width = objPet.hunger.normalise() * barHunger.style.maxWidth;
//     barHunger.innerText = (objPet.hunger.normalise() * 100) + '%';
//
//     barBoredom.style.width = objPet.boredom.normalise() * barBoredom.style.maxWidth;
//     barBoredom.innerText = (objPet.boredom.normalise() * 100) + '%';
//
//     barHappiness.style.width = objPet.happiness.inverseNormalise() * barHappiness.style.maxWidth;
//     barHappiness.innerText = (objPet.happiness.inverseNormalise() * 100) + '%';
// }

// ===============================================================
//  GAME LOOP
// ===============================================================

function gameLoop()
{
    //console.log('doTime');
    intTimer = Math.max(0, intTimer - 1000);
    intAge += 10; //update age of pet

    if (intTimer <= 0)
    {
        //timer reaches zero :- Update pet properties
        updatePet(); //increase hunger, boredom, decrease health and happiness
        updateMaxTimer();
        intTimer = intMaxTime;
    }
    updateDisplay();
}

const timerId = setInterval(gameLoop, 100);