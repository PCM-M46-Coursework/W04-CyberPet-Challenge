import '#~/src/prototype';
import { Creature } from '../../../src/objects/Creature';

/**
 * @memberof Jest
 * @namespace CreatureTests
 */
describe('Creature', () =>
{
    let sut;
    let options = {
        petName: "Test",
        creatureType: "test",
        creatureName: "Test",
        maxHealth: 500,
        maxHealth: 5000,
        favouredStat: 'hunger',
        specialAbilityName: "Test",
        specialAbilityDescription: "Test"
    }

    beforeEach(() =>
    {
        sut = new Creature(options);
    });

    describe('Initial Statistics', () =>
    {
        it('Should initially set the Health statistic to the maxHealth withint the options.', () =>
        {
            // Arrange
            const expected = options.maxHealth;

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
            const expected =  options.petName;

            // Act
            const actual = sut.petName;

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should set the creature's type.", () =>
        {
            // Arrange
            const expected =  options.creatureType;

            // Act
            const actual = sut.creatureType;

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should set the creature's max time.", () =>
        {
            // Arrange
            const expected =  options.maxTime;

            // Act
            const actual = sut.maxTime;

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should set the creature's type name.", () =>
        {
            // Arrange
            const expected =  options.creatureName;

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
            const expected = options.specialAbilityName;

            // Act
            const actual = sut.specialAbilityName;

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should set the creature's special ability name.", () =>
        {
            // Arrange
            const expected = options.specialAbilityDescription;

            // Act
            const actual = sut.specialAbilityDescription;

            // Assert
            expect(actual).toBe(expected);
        });
    });
});