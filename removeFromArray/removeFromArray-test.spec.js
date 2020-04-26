const removeFromArray = require('./removeFromArray');


describe('removeFromArray', function() {
    
    it('accepts multiple elements', function() {
        expect(removeFromArray([1, 2, 3, 5, 67, 99], 1, 2, 3, 5, 67)).toEqual([99]);
    });   
});
    