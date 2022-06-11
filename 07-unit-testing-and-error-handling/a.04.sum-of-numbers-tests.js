const {
    sum
} = require('./a.04.sum-of-numbers')

const {
    assert,
    expect
} = require('chai')

// • Take an array of numbers as an argument
// • Return the sum of the values of all elements inside the array

describe('testSum', () => {
    it('returns correct sum with array consisting of numbers - expect', () => {
        expect(sum([3, 5])).to.equal(8)
    });

    it('returns correct sum with array consisting of numbers - assert', () => {
        assert(sum([33.33, -11.11]), -22.22)
    });

    it('returns correct sum if value in array can be cast to number', () => {
        expect(sum(['3', '4', true])).to.equal(8)
    });

    it('returns NaN if array contains string', () => {
        assert(typeof sum([1, 'a']), NaN)
    });
})