function solve(face, suit) {
    suits = {
        'S': '\u2660', // Spades (♠)
        'H': '\u2665', // Hearts (♥)
        'D': '\u2666', // Diamonds (♦)
        'C': '\u2663', // Clubs (♣)
    }
    suit = suits[suit]
    if (suit == undefined) {
        throw new Error('Error')
    }

    faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    if (!faces.includes(face)) {
        throw new Error('Error')
    }

    card = {
        face: face,
        suit: suit,
        toString: () => {
            return `${face}${suit}`
        },
        // toString() {
        //     return `${this.face}${this.suit}`
        // }
    }
    return card
}


// console.log(solve('A', 'S'))
console.log(solve('10', 'H'))
// console.log(solve('1', 'C'))
// console.log(solve('1', 'XX'))
console.log(solve('8', 'D'))
