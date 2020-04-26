const calculator = require ('./calculator.js');

describe('add', () => {
    it('Adds two numbers', () => {
        expect(calculator.add(5, 15)).toEqual(20);
    });
});

describe('multiply', () => {
    it('Multiplies array numbers', () => {
        expect(calculator.multiply([5, 5, 5])).toEqual(125);
    });
});