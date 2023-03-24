const { Creature } = require('./Creature');

const options = {
    creatureType: "sunfish",
    creatureName: "Ocean Sunfish",
    maxHealth: 500,
    favouredStat: 'happiness',
    specialAbilityName: "Sunbathe",
    specialAbilityDescription: "The Ocean Sunfish is known to sunbathe at the surface of the water, floating on its side with its dorsal fin out of the water. This behaviour is thought to help the fish regulate its body temperature and may also help it remove parasites from its skin."
};

/**
 * Represents an Ocean Sunfish, within the game.
 * 
 * Sunbathing: The Ocean Sunfish is known to sunbathe at the surface of the water,
 * floating on its side with its dorsal fin out of the water. This behaviour
 * is thought to help the fish regulate its body temperature and may also help
 * it remove parasites from its skin.
 */
class Sunfish extends Creature
{
    /**
     * Initialises a new instance of the {@link Sunfish} class.
     * @param {String} name - The name the player decides to give their pet Ocean Sunfish.
     */
    constructor(name)
    {
        options.petName = name,
        super(options);
    }
}

module.exports = {
    Sunfish
};

module.exports._options = options;