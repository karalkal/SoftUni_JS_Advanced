const { assert } = require('chai')
const { flowerShop } = require('./flowerShop')

describe('test calcPriceOfFlowers(flower, price, quantity)', () => {
    it('throws an error if first param is invalid type', () => {
        assert.throws(() => flowerShop.calcPriceOfFlowers(1, 2, 3), Error, "Invalid input!")
        assert.throws(() => flowerShop.calcPriceOfFlowers({ 'a': 'a' }, 2, 3), Error, "Invalid input!")
    })
    it('throws an error if second param is invalid type', () => {
        assert.throws(() => flowerShop.calcPriceOfFlowers('a', 2.2, 3), Error, "Invalid input!")
        assert.throws(() => flowerShop.calcPriceOfFlowers('a', '2', 3), Error, "Invalid input!")
    })
    it('throws an error if third param is invalid type', () => {
        assert.throws(() => flowerShop.calcPriceOfFlowers('a', 2, 3.3), Error, "Invalid input!")
        assert.throws(() => flowerShop.calcPriceOfFlowers('a', 2, '3'), Error, "Invalid input!")
    })
    it('returns string with correctly rounded value if params are ok', () => {
        let expected = `You need $6.00 to buy ABCD!`
        assert.equal(flowerShop.calcPriceOfFlowers('ABCD', 2, 3), expected)
        expected = `You need $10.00 to buy ABCD!`
        assert.equal(flowerShop.calcPriceOfFlowers('ABCD', 2, 5), expected)
        expected = `You need $0.00 to buy ABCD!`
        assert.equal(flowerShop.calcPriceOfFlowers('ABCD', -0, 5), expected)
        expected = `You need $25.00 to buy ABCD!`
        assert.equal(flowerShop.calcPriceOfFlowers('ABCD', -5, -5), expected)
    })
});


describe('test checkFlowersAvailable(flower, gardenArr)', () => {
    it('must return relevant message if flower not in gardenArr', () => {
        let gardenArr = ["Rose", "Lily", "Orchid"]
        let flower = 'Crocus'
        assert.equal(flowerShop.checkFlowersAvailable(flower, gardenArr), `The Crocus are sold! You need to purchase more!`)
    })
    it('must return relevant message if flower is in gardenArr', () => {
        let gardenArr = ["Rose", "Lily", "Orchid"]
        let flower = 'Rose'
        assert.equal(flowerShop.checkFlowersAvailable(flower, gardenArr), `The Rose are available!`)
    })
})


describe('test sellFlowers(gardenArr, space)', () => {
    it('throws an error if first param is invalid type', () => {
        assert.throws(() => flowerShop.sellFlowers(1, 2), Error, "Invalid input!")
        assert.throws(() => flowerShop.sellFlowers([1], 2), Error, "Invalid input!")
        assert.throws(() => flowerShop.sellFlowers(true, 2), Error, "Invalid input!")
        assert.throws(() => flowerShop.sellFlowers({}, 2), Error, "Invalid input!")
    })
    it('throws an error if second param is invalid', () => {
        let gardenArr = ["Rose", "Lily", "Orchid"]

        assert.throws(() => flowerShop.sellFlowers(gardenArr, 2.2), Error, "Invalid input!") // must be Int
        assert.throws(() => flowerShop.sellFlowers(gardenArr, '2'), Error, "Invalid input!")
        assert.throws(() => flowerShop.sellFlowers(gardenArr, -2), Error, "Invalid input!")
        assert.throws(() => flowerShop.sellFlowers(gardenArr, 3), Error, "Invalid input!") // invalid index
    })
    it('adds items from arr to result string if params valid', () => {
        let gardenArr = ["Rose", "Lily", "Orchid"]
        assert.equal(flowerShop.sellFlowers(gardenArr, 2), "Rose / Lily")
        gardenArr = ["Rose", "Lily", "Orchid"]
        assert.equal(flowerShop.sellFlowers(gardenArr, 0), "Lily / Orchid")
    })
})
