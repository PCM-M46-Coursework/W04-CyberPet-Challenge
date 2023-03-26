import { soundManager } from "./src/objects/SoundManager.js";

// ================================================
//  SITE WIDE
// ================================================

const menuModal = document.querySelector('#menu');
const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', function() {
    this.toggleAttribute('closed');
    soundManager.play(this.hasAttribute('closed')
        ? 'menuClose'
        : 'menuOpen'
    );
    
    // HACK: Added the open/close mechanism for the modal menu here.
    menuModal.toggleAttribute('hidden');
});

soundManager.playOnHover('button, a, input, #nav-button', 'buttonHover');
soundManager.playOnClick('button:not(.action), a', 'buttonClick');
soundManager.playRandomOnClick('button.action', [
    'action1','action2','action3','action4'
]);

// ================================================
//  INDEX PAGE
// ================================================

if (window.location.pathname == '/') {
    soundManager.playOnClick('#btnStartGame', 'startGame');
    soundManager.playOnHover('.creature-image', 'buttonHover');
    soundManager.playOnEvent('focus', '#txtPetName', 'buttonClick');
    soundManager.playRandomOnEvent('input', '#txtPetName', [
        'type1', 'type2', 'type3', 'type4'
    ]);
    soundManager.playRandomOnClick('.creature-image', [
        'choosePet1', 'choosePet2'
    ]);
}

// ================================================
//  GAME PLAY
// ================================================

if (window.location.pathname == '/game-play.html') {
    soundManager.playOnClick('#btnSpecialAbility', 'specialAbility');
}