const { mathEnforcer } = require('./b.04.math-enforcer')
const { assert } = require('chai')

describe('test mathEnforcer', () => {
    it('addFive must add 5 to integer', () => {
        assert.equal(mathEnforcer.addFive(0), 5)
        assert.equal(mathEnforcer.addFive(5), 10)
    });
    it('addFive must add 5 to negative number', () => {
        assert.equal(mathEnforcer.addFive(-1), 4)
        assert.equal(mathEnforcer.addFive(-5), 0)
        assert.equal(mathEnforcer.addFive(-55), -50)
    });
    it('addFive must add 5 to float with 0.01 precision', () => {
        assert.closeTo(mathEnforcer.addFive(.301), 5.3, 0.01)
        assert.closeTo(mathEnforcer.addFive(5.19), 10.2, 0.01)
    });
    it('addFive must return undefined if paramater is not numeric', () => {
        assert.isUndefined(mathEnforcer.addFive('A'),)
        assert.isUndefined(mathEnforcer.addFive('8'),)
        assert.isUndefined(mathEnforcer.addFive([]),)
        assert.isUndefined(mathEnforcer.addFive({}),)
    });

    it('subtractTen must subtract 10 from integer', () => {
        assert.equal(mathEnforcer.subtractTen(20), 10)
        assert.equal(mathEnforcer.subtractTen(0), -10)
    });
    it('subtractTen must subtract 10 from negative number', () => {
        assert.equal(mathEnforcer.subtractTen(-20), -30)
        assert.equal(mathEnforcer.subtractTen(-1), -11)
    });
    it('subtractTen must  subtract 10 from float with 0.01 precision', () => {
        assert.closeTo(mathEnforcer.subtractTen(10.3699), .37, 0.01)
        assert.closeTo(mathEnforcer.subtractTen(20.77), 10.78, 0.01)
    });
    it('subtractTen must return undefined if paramater is not numeric', () => {
        assert.isUndefined(mathEnforcer.subtractTen('A'),)
        assert.isUndefined(mathEnforcer.subtractTen('8'),)
        assert.isUndefined(mathEnforcer.subtractTen([]),)
        assert.isUndefined(mathEnforcer.subtractTen({}),)
    });

    it('must return correct sum if parameters are numeric', () => {
        assert.equal(mathEnforcer.sum(4, 4), 8)
        assert.equal(mathEnforcer.sum(4.44, 4.44), 8.88)
        assert.equal(mathEnforcer.sum(-4.44, 4.44), 0)
        assert.equal(mathEnforcer.sum(4.44, -4.44), 0)
    });
    
    it('must return undefined if any of paramaters is not numeric', () => {
        assert.isUndefined(mathEnforcer.sum('A', 1),)
        assert.isUndefined(mathEnforcer.sum('8', 8),)
        assert.isUndefined(mathEnforcer.sum([], 1),)
        assert.isUndefined(mathEnforcer.sum(1, {}))
        assert.isUndefined(mathEnforcer.sum(1))
        assert.isUndefined(mathEnforcer.sum())

    })
})