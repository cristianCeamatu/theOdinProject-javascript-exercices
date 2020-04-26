const fibonacci = require ('./fibonacci');

describe('fibonacci', () => {
    it('accepts strings', () => {
        expect(fibonacci('3')).toEqual(2);
    });
})