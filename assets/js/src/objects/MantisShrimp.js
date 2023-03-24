import { Creature } from './Creature.js';

const options = {
    creatureType: "shrimp",
    creatureName: "Peacock Mantis Shrimp",
    maxHealth: 150,
    maxTime: 3000,
    favouredStat: 'hunger',
    specialAbilityName: "Sonic Punch",
    specialAbilityDescription: "The Peacock Mantis Shrimp has one of the fastest and most powerful punches in the animal kingdom. It can strike its prey with a speed of 50 miles per hour, which is strong enough to break glass or crack open a snail's shell."
};

/**
 * Represents a Peacock Mantis Shrimp, within the game.
 * 
 * Sonic Punch: The Peacock Mantis Shrimp has one of the fastest and most powerful
 * punches in the animal kingdom. It can strike its prey with a speed of 50 miles per
 * hour, which is strong enough to break glass or crack open a snail's shell.
 */
export class MantisShrimp extends Creature
{
    /**
     * Initialises a new instance of the {@link MantisShrimp} class.
     * @param {String} name - The name the player decides to give their pet Peacock Mantis Shrimp.
     */
    constructor(name)
    {
        options.petName = name,
        super(options);
    }
}

export const _options = options;