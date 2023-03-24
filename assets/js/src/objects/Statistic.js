import '../prototype/Number.prototype.js';

/**
 * Represents a statistic that can be increased or decreased within a specified range.
 * @class
 */
export class Statistic
{
    /**
     * @type {Number}
     * @private
     */
    #_initialValue;

    /**
     * @type {Number}
     * @private
     */
    #_currentValue;

    /**
     * @type {Number}
     * @private
     */
    #_maxValue;

    /**
     * Intialises a new instance of the {@link Statistic} class. 
     * @param {Number} intialValue - The initial value of the statistic.
     */
    constructor(intialValue, maxValue = 100)
    {
        this.#_maxValue = maxValue;
        this.#_initialValue = intialValue.clamp(0, this.#_maxValue);
        this.#_currentValue = this.#_initialValue;
    }

    /**
     * Gets the inital value assigned to the statistic.
     * @returns {Number} - The initial value assigned to the statistic.
     * @interal
     */
    _getInitialValue()
    {
        return this.#_initialValue;
    }

    /**
     * Gets the inital value assigned to the statistic.
     * @returns {Number} - The initial value assigned to the statistic.
     * @interal
     */
    _getMaxValue()
    {
        return this.#_maxValue;
    }

    /**
     * Gets the current value of the statistic.
     * @returns {Number} - The current value of the statistic.
     */
    getValue()
    {
        return this.#_currentValue;
    }

    /**
     * Gets the normalised value of the statistic.
     * @returns {Number} - The normalised value of the statistic.
     */
    normalise()
    {
        return this.getValue() / this.#_maxValue;
    }

    /**
     * Gets the inversely normalised value of the statistic.
     * @returns {Number} - The inversely normalised value of the statistic.
     */
    inverseNormalise()
    {
        return 1 - (this.getValue() / this.#_maxValue);
    }
    
    /**
     * Increases the statistic by a given amount.
     * @param {Number} amount - The amount to increase the statistic by.
     */
    increaseBy(amount)
    {
        const newValue = this.getValue() + amount;
        this.#_currentValue = newValue.clamp(0, this.#_maxValue);
    }
    
    /**
     * Decreases the statistic by a given amount.
     * @param {Number} amount - The amount to decrease the statistic by.
     */
    decreaseBy(amount)
    {
        const newValue = this.getValue() - amount;
        this.#_currentValue = newValue.clamp(0, this.#_maxValue);
    }
}