import '../prototype/Number.prototype.js';
import { Statistic } from './Statistic.js';

/**
 * Acts as a base class for all creatures provided as choices for the game.
 * @class
 */
export class Creature
{
    /**
     * @type {Object}
     * @private
     */
    #_options;

    /**
     * Initialises a new instance of the {@link Creature} class.
     * @param {Object} options - The options to set for the creature.
     */
    constructor (options)
    {
        this.#_options = options;  

        /**
         * The creature's Health statistic.
         * @returns {Statistic} - The statistic representing the creature's health.
         */
        this.health = new Statistic(options.maxHealth, options.maxHealth);
    }

    /**
     * The creature's Hunger statistic.
     * @returns {Statistic} - The statistic representing the creature's hunger.
     */
    hunger = new Statistic(0);

    /**
     * The creature's Boredom statistic.
     * @returns {Statistic} - The statistic representing the creature's boredom.
     */
    boredom = new Statistic(0);

    /**
     * The creature's Happiness statistic.
     * @returns {Statistic} - The statistic representing the creature's happiness.
     */
    happiness = new Statistic(100);

    /**
     * Gets the chosen name of the Creature.
     */
    get petName()
    {
        return this.#_options.petName;
    }

    /**
     * Gets the type of Creature.
     */
    get creatureType()
    {
        return this.#_options.creatureType;
    }

    /**
     * Gets the name of the type of Creature.
     */
    get creatureName()
    {
        return this.#_options.creatureName;
    }

    /**
     * Gets the name of the type of special ability the Creature has.
     */
    get specialAbilityName()
    {
        return this.#_options.specialAbilityName;
    }

    /**
     * Gets the name of the description of special ability the Creature has.
     */
    get specialAbilityDescription()
    {
        return this.#_options.specialAbilityDescription;
    }

    /**
     * The creature's favoured statistic.
     * @returns {Statistic} - The statistic representing the creature's favoured stat.
     */
    get favouredStat()
    {
        return this[this.#_options.favouredStat];
    }

    /**
     * The maximum timing interval for the creature's stats to drop.
     * @returns {Statistic} - The intial, and maximum time, in milliseconds, before the stats start dropping.
     */
    get maxTime()
    {
        return this[this.#_options.maxTime];
    }
}