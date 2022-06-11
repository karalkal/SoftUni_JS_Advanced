const { assert, expect } = require('chai');
const { createCalculator } = require('./a.07.add-subtract');



describe('Test Calc with Closure', () => {
    it('must return object with methods as parameters', () => {
        let kur = createCalculator()

        assert.hasAllKeys(kur, ['add', 'get', 'subtract'])
    });

    it('must return correct result when adding integers', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.add(8);
        assert.equal(kur.get(), 8);
        kur.add(22)
        assert.equal(kur.get(), 30);
    });

    it('must return correct result when adding parsable chars', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.add('8');
        assert.equal(kur.get(), 8);
        kur.add('22.22')
        assert.equal(kur.get(), 30.22);
    });

    it('must return correct result when adding floats', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.add(4.44);
        assert.equal(kur.get(), 4.44);
        kur.add(2.22)
        assert.equal(kur.get(), 6.66);
    });

    it('must return correct result when subtracting integers', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.subtract(8);
        assert.equal(kur.get(), -8);
        kur.subtract(-8)
        assert.equal(kur.get(), 0);
    });

    it('must return correct result when subtracting parsable chars', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.subtract('8');
        assert.equal(kur.get(), -8);
        kur.subtract('22.22')
        assert.equal(kur.get(), -30.22);
    });

    it('must return correct result when subtracting floats', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.subtract(4.44);
        assert.equal(kur.get(), -4.44);
        kur.subtract(2.22)
        assert.equal(kur.get(), -6.66);
    });

    it('must not work with string input', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.subtract('yes');
        assert.isNaN(kur.get())
    });

    it('must not work with array input', () => {
        let kur = createCalculator()

        assert.equal(kur.get(), 0);
        kur.subtract([1, 2, 3, 4]);
        assert.isNaN(kur.get())
    });
})