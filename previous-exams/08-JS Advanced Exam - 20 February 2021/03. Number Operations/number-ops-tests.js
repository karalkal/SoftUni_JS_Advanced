const { numberOperations } = require('./03. Number Operations_Resources')
const { assert, AssertionError } = require('chai')


describe('test powNumber(num)', () => {
    {
        it('must return num * num', () => {
            assert.equal(numberOperations.powNumber(2), 4)
            assert.equal(numberOperations.powNumber(8), 64);
        })
    }
});

describe('test numberChecker(input)', () => {
    {
        it('must throw error is input is not parsable to num', () => {
            assert.throws(() => numberOperations.numberChecker('a'), Error, 'The input is not a number!')
            assert.throws(() => numberOperations.numberChecker(), Error, 'The input is not a number!')
            assert.throws(() => numberOperations.numberChecker([1, 2]), Error, 'The input is not a number!')
            assert.throws(() => numberOperations.numberChecker({ 1: 1 }), Error, 'The input is not a number!')
        })
        it('returns correct result if "The number is lower than 100!"', () => {
            assert.equal(numberOperations.numberChecker(99), "The number is lower than 100!")
            assert.equal(numberOperations.numberChecker('99'), "The number is lower than 100!")
            assert.equal(numberOperations.numberChecker('99.99'), "The number is lower than 100!")
            assert.equal(numberOperations.numberChecker(true), "The number is lower than 100!")
            assert.equal(numberOperations.numberChecker(false), "The number is lower than 100!")
            assert.equal(numberOperations.numberChecker([99.99]), "The number is lower than 100!")
        })
        it('returns correct result if "The number is greater or equal to 100!"', () => {
            assert.equal(numberOperations.numberChecker(100), "The number is greater or equal to 100!")
            assert.equal(numberOperations.numberChecker('101'), "The number is greater or equal to 100!")
            assert.equal(numberOperations.numberChecker('100.001'), "The number is greater or equal to 100!")
            assert.equal(numberOperations.numberChecker([100]), "The number is greater or equal to 100!")
        })
    }
});

describe('test sumArrays(array1, array2)', () => {
    it('returns correct result if arrays are same length', () => {
        let a1 = [1, 2, 3, 4]
        let a2 = [1, 2, 3, 4]
        let expected = [2, 4, 6, 8]
        // assert.deepEqual(numberOperations.sumArrays(a1, a2)[0], expected[0])
        assert.equal(numberOperations.sumArrays(a1, a2)[0], expected[0])
        assert.equal(numberOperations.sumArrays(a1, a2)[3], expected[3])
        assert.equal(numberOperations.sumArrays(a1, a2).length, 4)

    })

    it('returns correct result if array1 is shorter', () => {
        let a1 = [1, 2]
        let a2 = [1, 2, 6, 8]
        let expected = [2, 4, 6, 8]
        // assert.deepEqual(numberOperations.sumArrays(a1, a2)[0], expected[0])
        assert.equal(numberOperations.sumArrays(a1, a2)[0], expected[0])
        assert.equal(numberOperations.sumArrays(a1, a2)[3], expected[3])
        assert.equal(numberOperations.sumArrays(a1, a2).length, 4)
    })

    it('returns correct result if array2 is shorter', () => {
        let a1 = [1, 2, 6, 8]
        let a2 = [1, 2]
        let expected = [2, 4, 6, 8]
        // assert.deepEqual(numberOperations.sumArrays(a1, a2)[0], expected[0])
        assert.equal(numberOperations.sumArrays(a1, a2)[0], expected[0])
        assert.equal(numberOperations.sumArrays(a1, a2)[3], expected[3])
        assert.equal(numberOperations.sumArrays(a1, a2).length, 4)
    })
})


