const { Statistic } = require('#~/src/objects/Statistic');

/**
 * @memberof Jest
 * @namespace StatisticTests
 */
describe('Statistic', () =>
{
    let stat;

    describe('Constructor Behaviour', () =>
    {        
        it('Should set the the correct inital value, when instantiated.', () =>
        {
            // Arrange
            const expected = 50;

            // Act
            stat = new Statistic(50);
            const actual = stat._getInitialValue();

            // Assert
            expect(actual).toBe(expected);
        });

        it('Should set the inital value to 0, when argument is negative.', () =>
        {
            // Arrange
            const expected = 0;

            // Act
            stat = new Statistic(-1);
            const actual = stat._getInitialValue();

            // Assert
            expect(actual).toBe(expected);
        });

        it('Should set the inital value to 100, when argument is greater.', () =>
        {
            // Arrange
            const expected = 100;

            // Act
            stat = new Statistic(1000);
            const actual = stat._getInitialValue();

            // Assert
            expect(actual).toBe(expected);
        });
        
        it('Should set the the current value equal to the initial value, when instantiated.', () =>
        {
            // Arrange
            stat = new Statistic(50);
            const expected = stat._getInitialValue();

            // Act
            const actual = stat.getValue();

            // Assert
            expect(actual).toBe(expected);
        });
    });

    
    describe('Functionality', () =>
    {
        beforeEach(() =>
        {
            stat = new Statistic(50);
        });

        describe('normalise', () =>
        { 
            it('Should correctly normalise the current value.', () =>
            {
                // Arrange
                const expected = 0.5;
    
                // Act
                const actual = stat.normalise();
    
                // Assert
                expect(actual).toBe(expected);
            });
        });

        describe('increaseBy', () =>
        { 
            it('Should correctly increase the current value.', () =>
            {
                // Arrange
                const expected = 80;
    
                // Act
                stat.increaseBy(30);
                const actual = stat.getValue();
    
                // Assert
                expect(actual).toBe(expected);
            });

            it('Should clamp to the max value, when increasing the value above the maximum bounds.', () =>
            {
                // Arrange
                const expected = 100;
    
                // Act
                stat.increaseBy(200);
                const actual = stat.getValue();
    
                // Assert
                expect(actual).toBe(expected);
            });
        });
    
        describe('decreaseBy', () =>
        { 
            it('Should correctly decrease the current value.', () =>
            {
                // Arrange
                const expected = 30;
    
                // Act
                stat.decreaseBy(20);
                const actual = stat.getValue();
    
                // Assert
                expect(actual).toBe(expected);
            });  

            it('Should clamp to 0, when decreasing the value below the minimum bounds.', () =>
            {
                // Arrange
                const expected = 0;
    
                // Act
                stat.decreaseBy(60);
                const actual = stat.getValue();
    
                // Assert
                expect(actual).toBe(expected);
            });  
        });
    });

});



describe('', () =>
{

});


it('', () =>
{

});