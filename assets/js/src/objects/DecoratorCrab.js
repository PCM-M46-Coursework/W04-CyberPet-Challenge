import { Creature } from './Creature.js';

const options = {
    creatureType: "DecoratorCrab",
    creatureName: "Decorator Crab",
    maxHealth: 100,
    maxTime: 5000,
    favouredStat: 'boredom',
    specialAbilityName: "Camouflage",
    specialAbilityDescription: "The Decorator Crab is known for its ability to camouflage itself by attaching bits of algae, seaweed, sponges, or other materials to its shell."
};

/**
 * Represents a Decorator Crab, within the game.
 * 
 * Camouflage: The Decorator Crab is known for its ability to camouflage itself
 * by attaching bits of algae, seaweed, sponges, or other materials to its shell.
 */
export class DecoratorCrab extends Creature
{
    /**
     * Initialises a new instance of the {@link DecoratorCrab} class.
     * @param {String} name - The name the player decides to give their pet Decorator Crab.
     */
    constructor(name)
    {
        options.petName = name,
        super(options);
    }
}

export const _options = options;