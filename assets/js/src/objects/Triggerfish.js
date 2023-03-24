const { Creature } = require('./Creature');

const options = {
    creatureType: "triggerfish",
    creatureName: "Picasso Triggerfish",
    maxHealth: 100,
    favouredStat: 'hunger',
    specialAbilityName: "Trigger Attack",
    specialAbilityDescription: "The Picasso Triggerfish has strong, powerful jaws that it uses to crush and eat hard-shelled prey such as crustaceans, snails, and sea urchins. ",
};

/**
 * Represents an Picasso Triggerfish, within the game.
 * 
 * Trigger Attack:  The Picasso Triggerfish has strong, powerful jaws that it uses
 * to crush and eat hard-shelled prey such as crustaceans, snails, and sea urchins. 
 */
class Triggerfish extends Creature
{
    /**
     * Initialises a new instance of the {@link Triggerfish} class.
     * @param {String} name - The name the player decides to give their pet Picasso Triggerfish.
     */
    constructor(name)
    {
        options.petName = name,
        super(options);
    }
}

module.exports = {
    Triggerfish
};

module.exports._options = options;