import { Creature } from './Creature.js';

const options = {
    creatureType: "Triggerfish",
    creatureName: "Picasso Triggerfish",
    maxHealth: 100,
    maxTime: 6000,
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
export class Triggerfish extends Creature
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

export const _options = options;