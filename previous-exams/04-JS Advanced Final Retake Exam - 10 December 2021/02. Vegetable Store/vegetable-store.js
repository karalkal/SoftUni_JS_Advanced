class VegetableStore {
    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = []
    }

    loadingVegetables(vegetables) {
        let result = `Successfully added`
        for (let veg of vegetables) {
            let [type, quantity, price] = veg.split(' ')
            quantity = Number(quantity)
            price = Number(price)

            let currentItem = this.availableProducts.find(veg => veg.type === type)
            // if item is new
            if (currentItem === undefined) {
                currentItem = { type, quantity, price }
                this.availableProducts.push(currentItem)
                result += ` ${type},`
            }
            // if already in stock
            else {
                if (currentItem.price < price) {
                    currentItem.price = price
                }
                currentItem.quantity += quantity
            }
        }
        // console.log(this.availableProducts)
        return result.slice(0, -1)      // remove trailing comma
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0
        for (let veg of selectedProducts) {
            let [type, quantity] = veg.split(' ')
            quantity = Number(quantity)

            let foundItem = this.availableProducts.find(veg => veg.type === type)
            if (foundItem === undefined || foundItem.quantity < quantity) {              // OR LESS AVAILABLE?
                throw Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            // if found
            foundItem.quantity -= quantity              // remove bougt quantity
            totalPrice += foundItem.price * quantity    // calculate bill
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let foundItem = this.availableProducts.find(veg => veg.type === type)
        if (foundItem === undefined) {
            throw Error(`${type} is not available in the store.`)
        }
        // if item of this type is found
        if (foundItem.quantity <= quantity) {   // all quantity is fuc*ed
            foundItem.quantity = 0
            // the below removes it altogether but in task descr the value of the quantity in the array becomes zero
            // this.availableProducts.splice(this.availableProducts.indexOf(foundItem), 1)  // removes it altogether
            return `The entire quantity of the ${type} has been removed.`
        } else {
            foundItem.quantity -= quantity
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision() {
        let result = "Available vegetables:\n"
        let sortedStockByQuantity = this.availableProducts
            .sort((a, b) => a.price - b.price)
            .map(veg => `${veg.type}-${veg.quantity}-$${veg.price}`)

        result += sortedStockByQuantity.join('\n')
        result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5", "Okra 2.5 1", "Okra 5 8.8"]));


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());