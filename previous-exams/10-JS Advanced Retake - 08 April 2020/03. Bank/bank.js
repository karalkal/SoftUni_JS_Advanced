class Bank {
    #bankName

    constructor(bankName) {
        this.#bankName = bankName
        this.allCustomers = []
    }

    newCustomer(customer) {  // of type object {firstName, lastName, personalId}
        for (let c of this.allCustomers) {
            if (c.firstName === customer.firstName && c.lastName === customer.lastName && c.personalId === customer.personalId) {
                throw new Error(`${c.firstName} ${c.lastName} is already our customer!`)
            }
        }
        this.allCustomers.push(customer)
        return customer
    }


    depositMoney(personalId, amount) {
        let foundCustomer = this.allCustomers.find(c => c.personalId === personalId)
        if (!foundCustomer) {
            throw new Error('“We have no customer with this ID!”')
        }
        if (foundCustomer.hasOwnProperty('totalMoney')) {
            foundCustomer.totalMoney += amount
        } else {
            foundCustomer.totalMoney = amount
        }

        if (!foundCustomer.hasOwnProperty('transactionsStrings')) {
            foundCustomer.transactionsStrings = []
        }
        foundCustomer.transactionsStrings.push(`${foundCustomer.firstName} ${foundCustomer.lastName} made deposit of ${amount}$!`)

        return `${foundCustomer.totalMoney}$`
    }


    withdrawMoney(personalId, amount) {
        let foundCustomer = this.allCustomers.find(c => c.personalId === personalId)
        if (!foundCustomer) {
            throw new Error('We have no customer with this ID!')
        }
        if (!foundCustomer.hasOwnProperty('transactionsStrings')
            || foundCustomer.totalMoney < amount) {
            throw new Error(`${foundCustomer.firstName} ${foundCustomer.lastName} does not have enough money to withdraw that amount!`)
        }
        foundCustomer.totalMoney -= amount

        if (!foundCustomer.hasOwnProperty('totalMoney')) {
            foundCustomer.transactionsStrings = []
        }
        foundCustomer.transactionsStrings.push(`${foundCustomer.firstName} ${foundCustomer.lastName} withdrew ${amount}$!`)

        return `${foundCustomer.totalMoney}$`
    }


    customerInfo(personalId) {
        let foundCustomer = this.allCustomers.find(c => c.personalId === personalId)
        if (!foundCustomer) {
            throw new Error('We have no customer with this ID!')
        }

        let enumeratedTransactions = foundCustomer.transactionsStrings
            .map((tr, index) => `${index + 1}. ` + tr)
            .reverse()
            .join('\n')


        return `Bank name: ${this.#bankName}\nCustomer name: ${foundCustomer.firstName} ${foundCustomer.lastName}\nCustomer ID: ${foundCustomer.personalId}\nTotal Money: ${foundCustomer.totalMoney}$\nTransactions:\n${enumeratedTransactions}`
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

// bank.depositMoney(0, 250);
console.log(bank.depositMoney(6233267, 250))
console.log(bank.depositMoney(6233267, 250))
console.log(bank.depositMoney(4151596, 555))

// console.log(bank.withdrawMoney(6233267, 501));
console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));