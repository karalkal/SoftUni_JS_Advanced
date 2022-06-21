const { testNumbers } = require('./testNumbers')
const { asser, assert } = require('chai')

describe('test sumNumbers: function (num1, num2)', () => {
    it('returns undefined if num1 or num2 is not number', () => {
        assert.isUndefined(testNumbers.sumNumbers())
        assert.isUndefined(testNumbers.sumNumbers('1', 1))
        assert.isUndefined(testNumbers.sumNumbers(1, '1'))
        assert.isUndefined(testNumbers.sumNumbers([1], 1))
        assert.isUndefined(testNumbers.sumNumbers(1, { 1: 1 }))
    })
    it('returns correct result if num1 and num2 are numbers', () => {
        assert.equal(testNumbers.sumNumbers(1, 1), '2.00')
        assert.equal(testNumbers.sumNumbers(1, -1), '0.00')
        assert.equal(testNumbers.sumNumbers(1.001, 0), '1.00')
        assert.equal(testNumbers.sumNumbers(0.055, 0), '0.06')
    })
});


describe('test numberChecker(input)', () => {
    it('throws Error if input is not a number', () => {
        assert.throws(() => testNumbers.numberChecker('a'), Error, 'The input is not a number!')
        assert.throws(() => testNumbers.numberChecker(), Error, 'The input is not a number!')
        assert.throws(() => testNumbers.numberChecker([1, 2]), Error, 'The input is not a number!')
        assert.throws(() => testNumbers.numberChecker({ 1: 1 }), Error, 'The input is not a number!')
    })
    it('converts boolean to number and returns ood/even', () => {
        assert.equal(testNumbers.numberChecker(false), 'The number is even!')
        assert.equal(testNumbers.numberChecker(true), 'The number is odd!')
    })
    it('converts numeric str to number and returns ood/even', () => {
        assert.equal(testNumbers.numberChecker('2'), 'The number is even!')
        assert.equal(testNumbers.numberChecker('2.2'), 'The number is odd!')
        assert.equal(testNumbers.numberChecker('1'), 'The number is odd!')
        assert.equal(testNumbers.numberChecker('1.1'), 'The number is odd!')
    })
    it('converts arr with one numeric element to number and returns ood/even', () => {
        assert.equal(testNumbers.numberChecker([2]), 'The number is even!')
        assert.equal(testNumbers.numberChecker([2.2]), 'The number is odd!')
        assert.equal(testNumbers.numberChecker(['1']), 'The number is odd!')
        assert.equal(testNumbers.numberChecker(['1.1']), 'The number is odd!')
    })
});

describe('averageSumArray: function (arr)', () => {
    it('returns correct avg sum', () => {
        assert.equal(testNumbers.averageSumArray([1, 2, 3]), 2)
    })
});
