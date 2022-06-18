class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw Error('Not enough space in the collection.')
        }
        this.books.push({ bookName, bookAuthor, paid: false })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        for (let book of this.books) {
            if (book.bookName === bookName) {
                if (book.paid) {
                    throw Error(`${bookName} has already been paid.`)
                } else {
                    book.paid = true
                    return `${bookName} has been successfully paid.`
                }
            }
        }
        // if exits loop => not found
        throw Error(`${bookName} is not in the collection.`)
    }

    removeBook(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i]
            if (book.bookName === bookName) {
                if (!book.paid) {
                    throw Error(`${bookName} need to be paid before removing from the collection.`)
                } else {
                    this.books.splice(i, 1)
                    return `${bookName} remove from the collection.`
                }
            }
        }
        // if exits loop => not found
        throw Error("The book, you're looking for, is not found.")
    }

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.`
            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            for (let book of sortedBooks) {
                result += `\n${book.bookName} == ${book.bookAuthor} - ${book.paid ? 'Has Paid' : 'Not Paid'}.`
            }
            return result
        }
        // if bookAutor param is provided
        let result = []
        for (let book of this.books) {
            if (book.bookAuthor === bookAuthor) {
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid ? 'Has Paid' : 'Not Paid'}.`)
            }
            return result.join('n')
        }
        // if exits loop => not found
        throw Error(`${bookAuthor} is not in the collection.`)
    }
}


// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.payBook('Don Quixote'));
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());

