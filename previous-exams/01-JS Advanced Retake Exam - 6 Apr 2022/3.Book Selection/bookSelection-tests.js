const { bookSelection } = require('./bookSelection')
const { assert } = require('chai')

describe('test isGenreSuitable', () => {
    it('must return not suitable message if age 12 and genre Thriller', () =>
        assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`)
    );

    it('must return not suitable message if age 12 and genre Horror', () =>
        assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`)
    );

    it('must return suitable message if age 12 and genre alright', () =>
        assert.equal(bookSelection.isGenreSuitable('OK', 12), `Those books are suitable`)
    );

    it('must return suitable message if age over 12 and genre Thriller', () =>
        assert.equal(bookSelection.isGenreSuitable('Thriller', 13), `Those books are suitable`)
    );

    it('must return suitable message if age over 12 and genre Horror', () =>
        assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`)
    );

    it('must return suitable message if age over 12 and genre alright', () =>
        assert.equal(bookSelection.isGenreSuitable('OK', 13), `Those books are suitable`)
    );
})


describe('test isItAffordable', () => {
    it('must raise error if price is string', () => {
        assert.throws(() => bookSelection.isItAffordable('1', 1), Error, "Invalid input")
    })
    it('must raise error if price is boolean', () => {
        assert.throws(() => bookSelection.isItAffordable(true, 1), Error, "Invalid input")
    })
    it('must raise error if budget is string', () => {
        assert.throws(() => bookSelection.isItAffordable(1, '1'), Error, "Invalid input")
    })
    it('must raise error if budget is boolean', () => {
        assert.throws(() => bookSelection.isItAffordable(1, true), Error, "Invalid input")
    })
    it('must return suitable message if budget < price', () => {
        assert.equal(bookSelection.isItAffordable(2, 1), "You don't have enough money")
    })
    it('must return suitable message if budget === price', () => {
        assert.equal(bookSelection.isItAffordable(2, 2), "Book bought. You have 0$ left")
    })
    it('must return suitable message if budget > price', () => {
        assert.equal(bookSelection.isItAffordable(1.1, 2.2), "Book bought. You have 1.1$ left")
    })
})


describe('test suitableTitles', () => {
    it('must throw error if first param is number', () => {
        assert.throws(() => bookSelection.suitableTitles(1, "title"), Error, "Invalid input")
    })
    it('must throw error if first param is string', () => {
        assert.throws(() => bookSelection.suitableTitles('1', "title"), Error, "Invalid input")
    })
    it('must throw error if second param is number', () => {
        assert.throws(() => bookSelection.suitableTitles([], 1), Error, "Invalid input")
    })
    it('must throw error if second param is array', () => {
        assert.throws(() => bookSelection.suitableTitles([], ['invalid']), Error, "Invalid input")
    })
    it('must add to resultArr books with required genre param', () => {
        let inputArr = [
            { title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Book2", genre: "other" },
        ]
        let result = bookSelection.suitableTitles(inputArr, "Thriller")

        assert.isTrue(Array.isArray(result))
        assert.isTrue(result.includes("The Da Vinci Code"))
        assert.isTrue(result.length === 1)
        assert.isFalse(result.includes("other"))
        // assert.deepEqual(actual, expected)
    })


    it('must not add to resultArr books with different required genre param', () => {
        let inputArr = [{ title: "The Da Vinci Code", genre: "other" }]
        let result = bookSelection.suitableTitles(inputArr, "Thriller")

        assert.isTrue(result.length === 0)

        // assert.deepEqual(bookSelection.suitableTitles(inputArr, "Thriller"), [])
    })
})