function solve(input) {

    let allCars = {}

    for (let entry of input) {
        let [brand, model, quantity] = entry.split(' | ')
        quantity = Number(quantity)

        if (!allCars[brand]) {
            allCars[brand] = [[model, quantity]]                      // if new brand, create obj with value as tuple - Audi: [ [ ' Q7', 1000 ] ]
        }
        else {
            let brandsModels = Object.values(allCars[brand])[0]

            if (!brandsModels.includes(model)) {                    // if model is not in brand's portfolio, create it with quantity
                allCars[brand].push([model, quantity])

            } else {                                                // otherwise increment quantity
                let modelFoundInTuple = brandsModels.indexOf(model)
                allCars[brand][modelFoundInTuple][1] += quantity    // increment second value in tuple by quantity
            }
        }
    }
    // console.log(allCars)
    for (let [brand, tuples] of Object.entries(allCars)) {
        console.log(brand)
        for (let tuple of tuples) {
         console.log(`###${tuple[0]} -> ${tuple[1]}`)
        }        
    }
}



solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])