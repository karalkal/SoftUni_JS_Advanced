const { isOddOrEven } = require('./b.02.even-or-odd')
const { expect, assert } = require('chai')


describe('test od or even', () => {
    it('must return odd if input is odd length', () => {
        assert.equal(isOddOrEven('1'), 'odd')
    })

    it('must return even if input is even length', () => {
        assert.equal(isOddOrEven('12'), 'even')
    })

    it('must return even if input is empty string', () => {
        assert.equal(isOddOrEven(''), 'even')
    })

    it('must return even if input is number', () => {
        assert.isUndefined(isOddOrEven(1))
    })

    it('must return even if input is array', () => {
        assert.isUndefined(isOddOrEven([1, 2, 3, 4]))
    })

    it('must return even if input is bool', () => {
        assert.isUndefined(isOddOrEven(true))
    })
});