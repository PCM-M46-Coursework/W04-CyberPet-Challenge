const assert = require('assert');
require('#~/src/prototype/Number.prototype.js');

/**
 * @memberof Jest
 * @namespace NumberPrototypeTests
 */
describe('Prototype Methods: Number', () =>
{
    describe('Clamp', () =>
    {
        let min = 0;
        let max = 10;

        it('Should return the value itself, when it is within the given range.', () =>
        {
            // Arrange
            const value = 5;

            // Act
            const actual = value.clamp(min, max);

            // Assert
            const expected = 5;
            assert.strictEqual(actual, expected);
        });

        it('Should return the minimum value, when the value is below the given range.', () =>
        {
            // Arrange
            const value = -5;

            // Act
            const actual = value.clamp(min, max);

            // Assert
            const expected = 0;
            assert.strictEqual(actual, expected);
        });

        it('Should return the maximum value, when the value is above the given range.', () =>
        {
            // Arrange
            const value = 15;

            // Act
            const actual = value.clamp(min, max);

            // Assert
            const expected = 10;
            assert.strictEqual(actual, expected);
        });
    });
});