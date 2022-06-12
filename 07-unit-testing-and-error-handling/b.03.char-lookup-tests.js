const { lookupChar } = require('./b.03.char-lookup')
const { assert, expect } = require('chai')

describe('tests for lookupChar', () => {
    it('must return correct char position if index is valid', () => {
        assert.equal(lookupChar('Kur', 0), 'K')
    });
    it('must return correct char position if index is valid', () => {
        assert.equal(lookupChar('Kur', 2), 'r')
    });
    // error messages    
    it('must return error message if index is negative', () => {
        assert.equal(lookupChar('Kur', -1), 'Incorrect index')
    });
    it('must return error message if index is equal to length', () => {
        assert.equal(lookupChar('Kur', 3), 'Incorrect index')
    });
    it('must return error message if index is more than length', () => {
        assert.equal(lookupChar('Kur', 4), 'Incorrect index')
    });

    // undefined tests, i.e. wrong types
    it('must return undefined if less args passed', () => {
        assert.isUndefined(lookupChar('Kur'))
        assert.isUndefined(lookupChar())
    });
    it('must return undefined if index is float', () => {
        assert.isUndefined(lookupChar('Kur', 3.3))
    });
    it('must return undefined if index is str', () => {
        assert.isUndefined(lookupChar('Kur', "3"))
    });
    it('must return error message if string is empty', () => {
        assert.equal(lookupChar('', 0), 'Incorrect index')
    });
    it('must return undefined if string is numeric', () => {
        assert.isUndefined(lookupChar(345, 0))
    });
    it('must return undefined if string is array', () => {
        assert.isUndefined(lookupChar(['kur'], 0))
    });
    it('must return undefined if string is object', () => {
        assert.isUndefined(lookupChar({}, 0))
    });
});