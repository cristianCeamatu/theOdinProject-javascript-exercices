const caesar = require('./caesar.js');

describe('caesar', () => {
    it("Accepts chars", () => {
        expect(caesar('a', 1)).toEqual('b');
    });
    it("Works with words", () => {
        expect(caesar('Bbs', 2)).toEqual('Ddu');
    });
})