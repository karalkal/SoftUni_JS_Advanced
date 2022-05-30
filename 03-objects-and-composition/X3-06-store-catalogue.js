function sortItems(arr) {
    let dict = {}

    for (let pair of arr) {
        let [item, price] = pair.split(' : ')
        price = Number(price)
        let firstLetter = item[0]

        // if LETTER not in dictionary yet
        if (!dict[firstLetter]) {
            dict[firstLetter] = []
        }

        // either way add new item (as array) to relevant LETTER object
        dict[firstLetter].push([item, price])
    }

    // sort entries for each letter first
    for (let eachLetter in dict) {
        // console.log(dict[eachLetter][0])
        dict[eachLetter].sort((a, b) => a[0].localeCompare(b[0]))
    }

    // now create array with sorted keys and print
    let sortedItemsArr = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]))
    for (let [key, values] of sortedItemsArr) {
        console.log(key)
        values.forEach(value => {
            console.log(`  ${value[0]}: ${value[1]}`)
        });
    }
}

sortItems(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])

console.log('======================')

sortItems(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])