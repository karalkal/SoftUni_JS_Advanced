function sortTickets(ticketsStrings, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    let ticketsObjects = []
    for (let ticket of ticketsStrings) {
        let [d, p, s] = ticket.split('|')
        ticketsObjects.push(new Ticket(d, p, s))
    }
    // console.log(ticketsObjects)

    let sortedTickets = []
    if (criteria === 'destination') {
        sortedTickets = ticketsObjects.sort((a, b) => a.destination.localeCompare(b.destination))
    }
    else if (criteria === 'price') {
        sortedTickets = ticketsObjects.sort((a, b) => a.price - b.price)
    }
    else if (criteria === 'status') {
        sortedTickets = ticketsObjects.sort((a, b) => a.status.localeCompare(b.status))
    }
    return sortedTickets
}

// console.log(sortTickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'))

// console.log(sortTickets([
//     'Philadelphia|194.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'price'))

// console.log(sortTickets([
//     'Philadelphia|94.20|zapazen',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'status'))

console.log(sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|available',
    'Philadelphia|132.20|departed',
    'Chicago|140.20|available',
    'Dallas|144.60|sold',
    'New York City|206.20|sold',
    'New York City|240.20|departed',
    'New York City|305.20|departed'],
    'destination'))