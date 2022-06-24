class ChristmasDinner {
    constructor(budget) {
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = []
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this._budget = value
    }

    get budget() {
        return this._budget
    }

    shopping(product) {
        let productType = product[0]
        let productPrice = Number(product[1])
        if (this.budget < productPrice) {
            throw new Error("Not enough money to buy this product")
        }

        this.budget -= productPrice
        this.products.push(productType)
        return `You have successfully bought ${productType}!`
    }

    recipes(recipe) {             //{ recipeName: string, productsList: array of strings }
        for (let ingr of recipe.productsList) {
            if (!this.products.includes(ingr)) {
                throw new Error("We do not have this product")
            }

        }
        this.dishes.push({ recipeName: recipe.recipeName, productsList: recipe.productsList })
        return `${recipe.recipeName} has been successfully cooked!`
    }

    inviteGuests(guestName, dish) {
        for (let guest of this.guests) {

            if (Object.keys(guest)[0] === guestName) {      // keys returns an array
                throw new Error("This guest has already been invited")
            }
        }
        if (!this.dishes.find(d => d.recipeName === dish)) {
            throw new Error("We do not have this dish")
        }
        let newGuest = {}
        newGuest[guestName] = dish
        this.guests.push(newGuest)
        return `You have successfully invited ${guestName}!`
    }


    showAttendance() {
        let result = []
        for (let g of this.guests) {
            let [name, ordered] = Object.entries(g)[0]

            let ingredients = this.dishes
            .find(d => d.recipeName === ordered)
            .productsList
            .join(', ')

            // console.log(ingredients)
            result.push(`${name} will eat ${ordered}, which consists of ${ingredients}`)
        }
        return result.join('\n')
    }
}


let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]))
console.log(dinner.shopping(['Beans', 3]))
console.log(dinner.shopping(['Cabbage', 4]))
console.log(dinner.shopping(['Rice', 2]))
console.log(dinner.shopping(['Savory', 1]))
console.log(dinner.shopping(['Peppers', 1]))
console.log(dinner.shopping(['Fruits', 40]))
console.log(dinner.shopping(['Honey', 10]))
console.log(dinner.budget)

console.log('########')

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}))
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}))
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}))
console.log(dinner.dishes)

console.log('########')

console.log(dinner.inviteGuests('Ivan', 'Oshav'))
// console.log(dinner.inviteGuests('Ivan', 'Oshav'))
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'))
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'))
// console.log(dinner.inviteGuests('Trump', 'lajna'))
console.log(dinner.guests)

console.log('########')

console.log(dinner.showAttendance());


