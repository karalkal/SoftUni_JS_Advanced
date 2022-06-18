class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable //Number
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw Error('Not enough space in the garden.')
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })
        this.spaceAvailable -= spaceRequired
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        for (let plant of this.plants) {
            if (quantity <= 0) {                               //  cannot be zero or negative
                throw Error("The quantity cannot be zero or negative.")
            }

            if (plantName === plant.plantName) {               // item found in array
                if (plant.ripe) {                              // If the plant is already ripe
                    throw Error(`The ${plantName} is already ripe.`)
                }

                // Otherwise (headcase) perform necessary actions
                plant.ripe = true
                plant.quantity = Number(quantity)
                let successMessage = (quantity === 1) ?
                    `${quantity} ${plantName} has successfully ripened.` : `${quantity} ${plantName}s have successfully ripened.`
                return successMessage

            }
        } // If none of the above the plant is not found
        throw Error(`There is no ${plantName} in the garden.`)
    }

    harvestPlant(plantName) {
        for (let plant of this.plants) {
            if (plantName === plant.plantName) {               // item found in array
                if (!plant.ripe) {
                    throw Error(`The ${plantName} cannot be harvested before it is ripe.`)
                }
                // Headcase - remove the plant from the plants array, add it to storage with properties plantName and quantity, free up the total space that the plant required
                this.storage.push({                         // add to storage
                    plantName,
                    quantity: plant.quantity,
                })
                this.spaceAvailable += plant.spaceRequired   // adjust spaceAvailable
                this.plants.splice(this.plants.indexOf(plant), 1)        // remove the plant

                return `The ${plantName} has been successfully harvested.`
            }
        }
        // If none of the above the plant is not found
        throw Error(`There is no ${plantName} in the garden.`)
    }

    generateReport() {
        let resultString = `The garden has ${this.spaceAvailable} free space left.`

        let orderedPlants = this.plants
            .sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map(p => p.plantName)
        resultString += `\nPlants in the garden: ${orderedPlants.join(', ')}`

        let storageMessage = '\nPlants in storage: '
        if (!this.storage.length) {
            storageMessage += 'The storage is empty.'
        } else {
            let orderedStorageArray = this.storage
                .sort((a, b) => a.plantName.localeCompare(b.plantName))
                .map(p => `${p.plantName} (${p.quantity})`)
            storageMessage += `${orderedStorageArray.join(', ')}`
            resultString += storageMessage

            return resultString
        }
    }
}


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.generateReport());
