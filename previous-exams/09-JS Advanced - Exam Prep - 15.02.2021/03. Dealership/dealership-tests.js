const { assert, expect } = require('chai')
const { dealership } = require('./dealership')

describe('test newCarCost(oldCarModel, newCarPrice)', () => {
    let discountForOldCar = {
        'Audi A4 B8': 15000,
        'Audi A6 4K': 20000,
        'Audi A8 D5': 25000,
        'Audi TT 8J': 14000,
    }
    it('must return full price if car is not among specified models', () => {
        assert.equal(dealership.newCarCost('Ferrari', 2), 2)
    })
    it('must return full price if car is Audi A4 B8 specified models', () => {
        assert.equal(dealership.newCarCost('Audi A4 B8', 20000), 5000)
    })
    it('must return full price if car is Audi A6 4K specified models', () => {
        assert.equal(dealership.newCarCost('Audi A6 4K', 20000), 0)
    })
    it('must return full price if car is Audi A6 4K specified models', () => {
        assert.equal(dealership.newCarCost('Audi A8 D5', 30000), 5000)
    })
    it('must return full price if car is Audi A6 4K specified models', () => {
        assert.equal(dealership.newCarCost('Audi TT 8J', 15000), 1000)
    })
});

describe('test carEquipment(extrasArr, indexArr)', () => {
    it('returs array with selected extras', () => {
        assert.deepEqual(dealership.carEquipment([1, 2, 3, 4,], [1]), [2])
        assert.deepEqual(dealership.carEquipment([1, 2, 3, 4,], []), [])
        assert.deepEqual(dealership.carEquipment([1, 2, 3, 4,], [0, 3]), [1, 4])
        assert.deepEqual(dealership.carEquipment([1, 2, 3, 4,], [0, 4]), [1, undefined])
    })
});

describe('test euroCategory(category)', () => {
    it('gives 0.05% discount if category === 4', () => {
        assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`)
    })
    it('gives 0.05% discount if category > 4', () => {
        assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`)
    })
    it('gives no discount if category < 4', () => {
        assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!')
    })
})