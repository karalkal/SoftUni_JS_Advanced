const { carService } = require('./03. Car service_Resources')
const { assert } = require('chai')

describe('test isItExpensive (issue) ', () => {
    it('must return Expensive message if engine or transmission', () => {
        assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
        assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`)
    })
    it('must return Cheap message if not engine or transmission', () => {
        assert.equal(carService.isItExpensive('A'), `The overall price will be a bit cheaper`)
        assert.equal(carService.isItExpensive(''), `The overall price will be a bit cheaper`)
    })
});


describe('test discount (numberOfParts, totalPrice)', () => {
    it('must trhow is params are not numbers', () => {
        assert.throws(() => carService.discount(), Error, "Invalid input")
        assert.throws(() => carService.discount(1), Error, "Invalid input")
        assert.throws(() => carService.discount(1, '1'), Error, "Invalid input")
        assert.throws(() => carService.discount([1], [1]), Error, "Invalid input")
        assert.throws(() => carService.discount({ 1: 1 }, 2), Error, "Invalid input")
    })
    it('must return 15% discount if  2 < numberOfParts <= 7 ', () => {
        assert.equal(carService.discount(5, 100), 'Discount applied! You saved 15$')
        assert.equal(carService.discount(3, 100), 'Discount applied! You saved 15$')
        assert.equal(carService.discount(7, 100), 'Discount applied! You saved 15$')
    })
    it('must return 30% discount if  numberOfParts > 7 ', () => {
        assert.equal(carService.discount(50, 100), 'Discount applied! You saved 30$')
        assert.equal(carService.discount(8, 100), 'Discount applied! You saved 30$')
    })
    it('must return message discount if  numberOfParts <= 2 ', () => {
        assert.equal(carService.discount(2, 100), "You cannot apply a discount")
        assert.equal(carService.discount(1, 100), "You cannot apply a discount")
    })
})


describe('test partsToBuy (partsCatalog, neededParts)', () => {
    it('must throw error if any of params is not array', () => {
        assert.throws(() => (carService.partsToBuy()), Error, 'Invalid input')
        assert.throws(() => (carService.partsToBuy(1)), Error, 'Invalid input')
        assert.throws(() => (carService.partsToBuy(1, 1)), Error, 'Invalid input')
        assert.throws(() => (carService.partsToBuy({}, [])), Error, 'Invalid input')
        assert.throws(() => (carService.partsToBuy('1', [])), Error, 'Invalid input')
    })

    it('must return 0 if parts catalogue is empty array', () => {
        assert.equal(carService.partsToBuy([], [1, 2, 3]), 0)
    })

    it('must return price if all is fine', () => {
        let catalogue = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]
        let needed = ["blowoff valve", "injectors"]
        assert.equal(carService.partsToBuy(catalogue, needed), 145)
    })
})