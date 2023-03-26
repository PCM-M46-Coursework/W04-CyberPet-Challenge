/**
 * Provides a means for managing, and playing sounds, within the game.
 * @class
 */
class SoundManager
{    
    /**
     * Initialises a new instance of the {@link SoundManager} class. 
     * @param {Object} sounds - A dictionary of {@link Audio} instances, with a unique {@link String} key.
     */
    constructor(sounds)
    {
        this.sounds = sounds;
        Object.values(this.sounds)
            .forEach(a => a.preload = 'auto');
    }

    /**
     * Plays a sound file that has been stored within the sound manager.
     * @param {String} soundName - The key of the sound file, within the dictionary, that should be played.
     */
    play(soundName)
    {
        this.sounds[soundName].currentTime = 0;
        this.sounds[soundName].play();
    }

    /**
     * Plays a sound when a specific event is triggered for the given element(s).
     * @param {String} eventName - The name of the event to hook.
     * @param {String} selector - The element(s) to hook.
     * @param {String} sound - The sound to play.
     */
    playOnEvent(eventName, selector, sound)
    {
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener(eventName, () => {
                this.play(sound);
            });
        });
    }

    /**
     * Plays a random sound, from a given list, when a specific event is triggered for the given element(s).
     * @param {String} eventName - The name of the event to hook.
     * @param {String} selector - The element(s) to hook.
     * @param {String} sound - The sound to play.
     */
    playRandomOnEvent(eventName, selector, sounds)
    {
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener(eventName, () => {
                this.play(sounds[Math.floor(Math.random() * sounds.length)]);
            });
        });
    }

    /**
     * Plays a sound when the element(s) are hovered over, with the mouse.
     * @param {String} selector - The element(s) to hook.
     * @param {String} sound - The sound to play.
     */
    playOnHover(selector, sound)
    {
        this.playOnEvent('mouseenter', selector, sound);
    }

    /**
     * Plays a sound when the element(s) are clicked, with the mouse.
     * @param {String} selector - The element(s) to hook.
     * @param {String} sound - The sound to play.
     */
    playOnClick(selector, sound)
    {
        this.playOnEvent('click', selector, sound);
    }

    /**
     * Plays a random sound, from a given list, when the element(s) are clicked, with the mouse.
     * @param {String} selector - The element(s) to hook.
     * @param {String} sound - The sound to play.
     */
    playRandomOnClick(selector, sounds)
    {
        this.playRandomOnEvent('click', selector, sounds);
    }
}

/**
 * Provides a means for managing, and playing sounds, within the game.
 */
export const soundManager = new SoundManager({
    action1: new Audio(`./assets/audio/ui-action-1.ogg`),
    action2: new Audio(`./assets/audio/ui-action-2.ogg`),
    action3: new Audio(`./assets/audio/ui-action-3.ogg`),
    action4: new Audio(`./assets/audio/ui-action-4.ogg`),
    buttonHover: new Audio(`./assets/audio/ui-button-hover.ogg`),
    buttonClick: new Audio(`./assets/audio/ui-generic-select.ogg`),
    gameOver: new Audio(`./assets/audio/ui-game-over.ogg`),
    menuOpen: new Audio(`./assets/audio/ui-menu-open.ogg`),
    menuClose: new Audio(`./assets/audio/ui-menu-close.ogg`),
    startGame: new Audio(`./assets/audio/ui-start-game.ogg`),
    specialAbility: new Audio(`./assets/audio/ui-special-ability.ogg`),
    choosePet1: new Audio(`./assets/audio/ui-choose-pet-1.ogg`),
    choosePet2: new Audio(`./assets/audio/ui-choose-pet-2.ogg`),
    type1: new Audio(`./assets/audio/ui-type-1.ogg`),
    type2: new Audio(`./assets/audio/ui-type-2.ogg`),
    type3: new Audio(`./assets/audio/ui-type-3.ogg`),
    type4: new Audio(`./assets/audio/ui-type-4.ogg`),
});