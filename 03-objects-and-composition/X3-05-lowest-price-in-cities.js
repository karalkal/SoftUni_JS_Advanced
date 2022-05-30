function findCheapestCity(arr) {
    let itemsDict = {}

    for (let element of arr) {
        [cityName, item, price] = element.split(' | ')
        price = Number(price)

        if (!(Object.keys(itemsDict)                // if item does not exist as key in outputArr, create it
            .includes(item))) {
            itemsDict[item] = { price, cityName }
        }

        if (itemsDict[item].price > price) {        // if stored price is higher, overwrite entry with lower price + city
            itemsDict[item] = {price, cityName}
        }
    }

    for (let [key, values] of Object.entries(itemsDict)) {
        console.log(`${key} -> ${values.price} (${values.cityName})`);
    }
}


// findCheapestCity([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'])

findCheapestCity([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',])