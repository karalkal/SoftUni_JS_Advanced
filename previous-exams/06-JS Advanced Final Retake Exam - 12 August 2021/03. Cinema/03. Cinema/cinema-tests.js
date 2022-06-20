const { cinema } = require('./cinema')
const { assert } = require('chai')


describe('test showMovies(movieArr)', () => {
    it('returns message if input is empty array', () => {
        assert.equal(cinema.showMovies([]), "There are currently no movies to show.")
    })
    it('returns correct string if input is not empty array', () => {
        let inputArr = ['King Kong', 'The Tomorrow War', 'Joker']
        let expected = 'King Kong, The Tomorrow War, Joker'
        assert.equal(cinema.showMovies(inputArr), expected)
    })
});

describe('test ticketPrice(projectionType)', () => {
    const schedule = {
        "Premiere": 12.00,
        "Normal": 7.50,
        "Discount": 5.50
    }
    it('throws error if arg is invalid', () => {
        assert.throws(() => cinema.ticketPrice('abc'), Error, "Invalid projection type.")
    })
    it('returns correct prices if arg is valid', () => {
        assert.equal(cinema.ticketPrice("Premiere"), 12)
        assert.equal(cinema.ticketPrice("Normal"), 7.5)
        assert.equal(cinema.ticketPrice("Discount"), 5.5)
    })
})

describe('test swapSeatsInHall(firstPlace, secondPlace)', () => {
    it('return unsuccessful message if any of args is not int', () => {
        assert.equal(cinema.swapSeatsInHall(), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall('1', 2), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1, '2'), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1.1, '2'), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1, 2.2), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall({ 1: 1 }, 2), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1, [2]), "Unsuccessful change of seats in the hall.")
    })
    it('return unsuccessful message if arg1 = arg2', () => {
        assert.equal(cinema.swapSeatsInHall(1, 1), "Unsuccessful change of seats in the hall.")
    })
    it('return unsuccessful message if any of args <= 0', () => {
        assert.equal(cinema.swapSeatsInHall(0, 1), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1, 0), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1, -1), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(-1, 1), "Unsuccessful change of seats in the hall.")
    })
    it('return unsuccessful message if any of args > 0', () => {
        assert.equal(cinema.swapSeatsInHall(1, 21), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(21, 1), "Unsuccessful change of seats in the hall.")
    })
    it('return success message if all is fine', () => {
        assert.equal(cinema.swapSeatsInHall(1, 20), "Successful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(20, 1), "Successful change of seats in the hall.")
    })
})
