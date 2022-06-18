const { assert } = require('chai')
const { rentCar } = require('./rentCar')

describe('searchCar test', () => {
    it('must return 1 matching object from array', () => {
        let arr = ["Volkswagen", "BMW", "Audi"]
        let searchedModel = 'BMW'
        let expected = `There is 1 car of model ${searchedModel} in the catalog!`
        assert.equal(rentCar.searchCar(arr, searchedModel), expected)
    })
    it('must return 3 matching object from array', () => {
        let arr = ["BMW", "BMW", "BMW"]
        let searchedModel = 'BMW'
        let expected = `There is 3 car of model ${searchedModel} in the catalog!`
        assert.equal(rentCar.searchCar(arr, searchedModel), expected)
    })
    it('must throw error if no matching object from array', () => {
        let arr = ["Volkswagen", "BMW", "Audi"]
        let searchedModel = 'FIAT'
        let expected = 'There are no such models in the catalog!'
        assert.throws(() => rentCar.searchCar(arr, searchedModel), Error, expected)
    })
    it('must throw error if first param is string', () => {
        let notArr = "Volkswagen"
        let searchedModel = 'FIAT'
        let expected = "Invalid input!"
        assert.throws(() => rentCar.searchCar(notArr, searchedModel), Error, expected)
    })
    it('must throw error if first param is number', () => {
        let notArr = 1
        let searchedModel = 'FIAT'
        let expected = "Invalid input!"
        assert.throws(() => rentCar.searchCar(notArr, searchedModel), Error, expected)
    })
    it('must throw error if second param is number', () => {
        let arr = ["Volkswagen", "BMW", "Audi"]
        let searchedModel = 1
        let expected = "Invalid input!"
        assert.throws(() => rentCar.searchCar(arr, searchedModel), Error, expected)
    })
    it('must throw error if second param is boolean', () => {
        let arr = ["Volkswagen", "BMW", "Audi"]
        let searchedModel = true
        let expected = "Invalid input!"
        assert.throws(() => rentCar.searchCar(arr, searchedModel), Error, expected)
    })
});

describe('calculatePriceOfCar tests', () => {
    it('must throw error if first param is not string', () => {
        assert.throws(() => rentCar.calculatePriceOfCar(1, 1), Error, "Invalid input!")
        assert.throws(() => rentCar.calculatePriceOfCar([1], 1), Error, "Invalid input!")
    })
    it('must throw error if second param is not integer', () => {
        assert.throws(() => rentCar.calculatePriceOfCar('abcd', 1.1), Error, "Invalid input!")
        assert.throws(() => rentCar.calculatePriceOfCar('abcd', '1'), Error, "Invalid input!")
    })
    it('must not find the car in catalogue', () => {
        let catalogue = { Audi: 36, Toyota: 40, BMW: 45, };
        assert.throws(() => rentCar.calculatePriceOfCar('Fiat', 10), Error, "No such model in the catalog!")
    })
    it('must find the car in catalogue and return correct string', () => {
        let catalogue = { Audi: 36, Toyota: 40, BMW: 45, };
        expected = `You choose Toyota and it will cost $400!`
        assert.equal(rentCar.calculatePriceOfCar('Toyota', 10), expected)
    })
})

describe('checkBudget tests', () => {
    it('must throw error if first param is not number', () => {
        assert.throws(() => rentCar.checkBudget('1', 1, 1), Error, "Invalid input!")
        assert.throws(() => rentCar.checkBudget(), Error, "Invalid input!")
    })
    it('must throw error if second param is not number', () => {
        assert.throws(() => rentCar.checkBudget(1, '1', 1), Error, "Invalid input!")
        assert.throws(() => rentCar.checkBudget(1), Error, "Invalid input!")
    })
    it('must throw error if third param is not number', () => {
        assert.throws(() => rentCar.checkBudget(1, 1, '2'), Error, "Invalid input!")
        assert.throws(() => rentCar.checkBudget(1, 2), Error, "Invalid input!")
    })
    it('must return relevant message if budget not enough', () => {
        assert.equal(rentCar.checkBudget(1, 2, 1), 'You need a bigger budget!')
        assert.equal(rentCar.checkBudget(2, 1, 1), 'You need a bigger budget!')
    })
    it('must return relevant message if budget equals total cost', () => {
        assert.equal(rentCar.checkBudget(1, 2, 2), `You rent a car!`)
    })
    it('must return relevant message if budget exceeds total cost', () => {
        assert.equal(rentCar.checkBudget(1, 2, 3), `You rent a car!`)
    })
})