class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(productsArray) {
        for (let product of productsArray) {
            let [productName, productQuantity, productPrice] = product.split(' ')
            productQuantity = Number(productQuantity)
            productPrice = Number(productPrice)

            if (productPrice > this.budgetMoney) {      // if not enough budget
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
            else {                                  // if enough money
                // let foundProduct = this.stockProducts.prName
                let foundProduct = this.stockProducts.productName
                if (!foundProduct) {                // if new product
                    this.stockProducts[productName] = Number(productQuantity)
                }
                else {                              // if existing product
                    foundProduct[productQuantity] += Number(productQuantity)
                }
                this.budgetMoney -= productPrice
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }
        }
        return this.history.join('\n')
    }

    addToMenu(mealName,  products, price) {
        if (Object.keys(this.menu).includes(mealName)) {
            return `The ${mealName} is already in the our menu, try something different.`
        }
        else {
            this.menu[mealName] = {  products, price }
        }
        return (Object.keys(this.menu).length === 1) ?
            `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?` :
            `Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
    }

    showTheMenu() {
        let menu = Object.entries(this.menu).map(item => `${item[0]} - $ ${item[1].price}`)
        if (menu.length === 0) {
            return "Our menu is not ready yet, please come later..."
        }
        return menu.join('\n')
    }

    makeTheOrder(mealName) {
        let mealsNames = Object.keys(this.menu)
        if (!mealsNames.includes(mealName)) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`
        }

        let orderedMeal = this.menu[mealName]
        let requiredIngredients = orderedMeal. products

        let availableIngredients = Object.keys(this.stockProducts)
        for (let ingr of requiredIngredients) {
            let [requiredIngName, requiredQty] = ingr.split(' ')

            let availableQty = this.stockProducts[requiredIngName]

            if (!availableIngredients.includes(requiredIngName)   // don't have a required ingreditnat at all
                || availableQty < requiredQty) {                    // or don't have required quantity

                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`
            }
            availableIngredients[requiredIngName] -= requiredQty   // reduce stock quantity of each uesd ingredient
        }

        this.budgetMoney += orderedMeal.price
        return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${orderedMeal.price}.`
    }
}


// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.history)

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.addToMenu('Banica', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Cheese 1.5'], 99.55));

// console.log(kitchen.showTheMenu());

// console.log(kitchen.makeTheOrder('lajna'))

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
// console.log(kitchen.makeTheOrder('frozenYogurt'));