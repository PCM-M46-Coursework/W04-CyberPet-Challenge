const petName = localStorage.getItem('petName');
document.querySelector('.strPetName').innerText = petName;
// console.log('Pet Name:', petName);

const creatureType = localStorage.getItem('creatureType');
document.querySelector('#imgAvatar').src = `./assets/img/${creatureType}.gif`;
// console.log('Creature Type:', creatureType);

const creatureName = localStorage.getItem('creatureName');
document.querySelector('.strCreatureName').innerText = creatureName;
// console.log('Creature Name:', creatureName);

const age = localStorage.getItem('age');
document.querySelector('.strAge').innerText = `${age / 100} seconds`;
// console.log('Age:', age);