class CarDealership {
    constructor(dealershipName) {
        this.dealershipName = dealershipName    //– String
        this.availableCars = []                 //– Array
        this.soldCars = []                      // – Array
        this.totalIncome = 0                    //– default: 0
    }

    addCar(model, horsepower, price, mileage) {
        // Model – non-empty string; Horsepower – positive integer number; Price – positive number; Mileage – positive number
        if (typeof model !== 'string' || model == ""
            || horsepower < 0 || !Number.isInteger(horsepower)
            || price < 0 || typeof price !== 'number'
            || mileage < 0 || typeof mileage !== 'number') {
            throw Error("Invalid input!")
        }
        // if input is valid
        let car = { model, horsepower, price, mileage }
        this.availableCars.push(car)
        return `New car added: ${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let soldPrice = 0
        let soldCar = {}
        for (let i = 0; i < this.availableCars.length; i++) {
            let car = this.availableCars[i]
            if (car.model === model) {
                //found the car, look up its mileage.
                if (car.mileage <= desiredMileage) {
                    soldPrice = car.price
                }
                else if (car.mileage <= desiredMileage + 40000) {
                    soldPrice = car.price * .95
                }
                else {
                    soldPrice = car.price * .9
                }
                // add it to sold, increment income
                soldCar.model = car.model
                soldCar.horsepower = car.horsepower
                soldCar.soldPrice = soldPrice
                this.soldCars.push(soldCar)
                this.totalIncome += soldPrice
                // remove from available
                this.availableCars.splice(i, 1)
                return `${soldCar.model} was sold for ${soldCar.soldPrice.toFixed(2)}$`
            }
        }
        // if car has not been found
        throw Error(`${model} was not found!`)
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars"
        }
        let result = "-Available cars:"
        for (let car of this.availableCars) {
            result += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
        }
        return result
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {    // possible criteria are "horsepower" or "model"
            throw Error("Invalid criteria!")
        }

        let result = `-${this.dealershipName} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`

        if (criteria === "horsepower") {
            let sortedCarsAsString = this.soldCars
                .sort((a, b) => b.horsepower - a.horsepower)
                .map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
                .join('\n')

            result += sortedCarsAsString
        }
        if (criteria === "model") {
            let sortedCarsAsString = this.soldCars
                .sort((a, b) => a.model.localeCompare(b.model))
                .map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
                .join('\n')

            result += sortedCarsAsString
        }

        return result
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));


// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));
// console.log(dealership.sellCar('Alfa Romeo GT', 110000));


// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());


// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Alfa Romeo GT', 150, 100000, 1000);

// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// dealership.sellCar('Alfa Romeo GT', 110000);
// console.log(dealership.salesReport('horsepower'));
// console.log(dealership.salesReport('model'));
// console.log(dealership.salesReport('уй'));