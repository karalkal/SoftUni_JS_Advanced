const { assert, expect } = require('chai')
const { isSymmetric } = require('./a.05.symmetric-arrays')

describe('Test  isSymmetric', () => {
    // it('test1', () => {
    //     console.log('Kur')
    // });
    it('returns true if array is symmetric with even count of elements', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns true if array is symmetric with odd count of elements', () => {
        expect(isSymmetric(['a', 2, 'z', 2, 'a'])).to.be.true;
    });

    it('returns false if input is number', () => {
        assert.isFalse(isSymmetric(1));
    });

    it('returns false if input is object', () => {
        assert.isFalse(isSymmetric({ 'а': 'a' }));
    });

    it('returns false if input is string', () => {
        assert.isFalse(isSymmetric('abba'));
    });

    it('returns false if array is not symmetric', () => {
        expect(isSymmetric([1, 8888, 1, 1])).to.be.false;
    });

    it('returns false if an element is wrong type', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });
})