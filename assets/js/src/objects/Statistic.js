require('#~/src/prototype');

class Statistic
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
     * Intialises a new instance of the {@link Statistic} class. 
     * @param {Number} intialValue - The initial value of the statistic.
     */
    constructor(intialValue)
    {
        this.#_initialValue = intialValue.clamp(0, 100);
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
        return this.getValue() / 100;
    }
    
    /**
     * Increases the statistic by a given amount.
     * @param {Number} amount - The amount to increase the statistic by.
     */
    increaseBy(amount)
    {
        const newValue = this.getValue() + amount;
        this.#_currentValue = newValue.clamp(0, 100);
    }
    
    /**
     * Decreases the statistic by a given amount.
     * @param {Number} amount - The amount to decrease the statistic by.
     */
    decreaseBy(amount)
    {
        const newValue = this.getValue() - amount;
        this.#_currentValue = newValue.clamp(0, 100);
    }
}

module.exports = {
    Statistic
};