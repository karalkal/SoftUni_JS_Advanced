/*
takes a deck of cards as an array of strings and prints them as a sequence of cards (space separated). 
Print `Invalid card: ${card}` when an invalid card definition is passed as input. 
*/

function solve(arr) {
    const suits = {
        'S': '\u2660', // Spades (♠)
        'H': '\u2665', // Hearts (♥)
        'D': '\u2666', // Diamonds (♦)
        'C': '\u2663', // Clubs (♣)

    }
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let result = []

    for (let card of arr) {
        suit = card.slice(-1)
        face = card.slice(0, -1)
        try {
            card = generateCard(suit, face)
            result.push(card)
        } catch (error) {
            console.log(`Invalid card: ${card}`)
            return
        }
    }

    function generateCard(suit, face) {
        suit = suits[suit]
        if (suit == undefined) {
            throw new Error()
        }

        if (!faces.includes(face)) {
            throw new Error()
        }

        let card = {
            face: face,
            suit: suit,
            toString: () => {
                return `${face}${suit}`
            },
        }
        return card
    }
    console.log(result.join(' '))
}

solve(['AS', '10D', 'KH', '2C'])
solve(['5S', '3D', 'QD', '1C'])