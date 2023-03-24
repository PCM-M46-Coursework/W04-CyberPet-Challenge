import '#~/src/prototype';
import { Triggerfish, _options } from '../../../src/objects/Triggerfish';

/**
 * @memberof Jest
 * @namespace TriggerfishTests
 */
describe('Triggerfish', () =>
{
    let sut;
    
    beforeEach(() =>
    {
        sut = new Triggerfish("Bob");
    });

    describe('Initial Statistics', () =>
    {
        it('Should initially set the Health statistic to the maxHealth within the options.', () =>
        {
            // Arrange
            const expected = _options.maxHealth;

            // Act
            const actual = sut.health.getValue();

            // Assert
            expect(actual).toBe(expected);
        });
        
        it('Should initially set the Hunger statistic to 0.', () =>
        {
            // Arrange
            const expected = 0;

            // Act
            const actual = sut.hunger.getValue();

            // Assert
            expect(actual).toBe(expected);
        });
        
        it('Should initially set the Boredom statistic to 0.', () =>
        {
            // Arrange
            const expected = 0;

            // Act
            const actual = sut.boredom.getValue();

            // Assert
            expect(actual).toBe(expected);
        });
        
        it('Should initially set the Happiness statistic to 100.', () =>
        {
            // Arrange
            const expected = 100;

            // Act
            const actual = sut.happiness.getValue();

            // Assert
            expect(actual).toBe(expected);
        });
    });

    describe('Constructor Behaviour', () =>
    {
        it("Should set the creature's pet name.", () =>
        {
            // Arrange
            const expected =  _options.petName;

            // Act
            const actual = sut.petName;

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should set the creature's type.", () =>
        {
            // Arrange
            const expected =  _options.creatureType;

            // Act
            const actual = sut.creatureType;

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should set the creature's type name.", () =>
        {
            // Arrange
            const expected =  _options.creatureName;

            // Act
            const actual = sut.creatureName;

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should set the creature's favoured ability.", () =>
        {
            // Arrange
            const expected = sut.health;

            // Act
            const actual = sut.favouredStat;

            // Assert
            expect(actual).toStrictEqual(expected);
        });

        it("Should set the creature's special ability name.", () =>
        {
            // Arrange
            const expected = _options.specialAbilityName;

            // Act
            const actual = sut.specialAbilityName;

            // Assert
            expect(actual).toBe(expected);
        });
    });
});