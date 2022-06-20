const { assert } = require('chai')
const { library } = require('./library')

    describe('test calcPriceOfBook(nameOfBook, year)', () => {
        it('must throw error if first param is not string', () => {
            assert.throws(() => library.calcPriceOfBook(1, 1), Error, "Invalid input")
            assert.throws(() => library.calcPriceOfBook({}, 1), Error, "Invalid input")
        })
        it('must throw error if second param is not int', () => {
            assert.throws(() => library.calcPriceOfBook('', 1.1), Error, "Invalid input")
            assert.throws(() => library.calcPriceOfBook('', '1'), Error, "Invalid input")
        })
        it('must return string with price 20 if second param is > 1980', () => {
            assert.equal(library.calcPriceOfBook('ABCD', 1981), `Price of ABCD is 20.00`)
        })
        it('must return string with price 10 if second param is <= 1980', () => {
            assert.equal(library.calcPriceOfBook('ABCD', 1980), `Price of ABCD is 10.00`)
            assert.equal(library.calcPriceOfBook('ABCD', 0), `Price of ABCD is 10.00`)
        })
    });

    describe('test findBook (booksArr, desiredBook)', () => {
        it('must throw error if first param is empty array', () => {
            assert.throws(() => library.findBook([], 'ABCD'), Error, "No books currently available")
        })
        it('must return correct message if first param (array) includes second param', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), "We found the book you want.")
        })
        it('must return correct message if first param (array) includes second param', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'ABCD'), "The book you are looking for is not here!")
        })
    });

    describe('test arrangeTheBooks (countBooks)', () => {
        it('must throw error if first param is not int', () => {
            assert.throws(() => library.arrangeTheBooks(1.1), Error, "Invalid input")
            assert.throws(() => library.arrangeTheBooks('1'), Error, "Invalid input")
            assert.throws(() => library.arrangeTheBooks(), Error, "Invalid input")
        })
        it('must throw error if first param is negative', () => {
            assert.throws(() => library.arrangeTheBooks(-1), Error, "Invalid input")
        })
        it('must return correct message if param > 40', () => {
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.")
        })
        it('must return correct message if param <= 40', () => {
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.")
            assert.equal(library.arrangeTheBooks(0), "Great job, the books are arranged.")
        })
    });