function solve(arr) {
    let cities = {}

    for (let pair of arr) {
        let [cityName, cityPopulation] = pair.split(' <-> ')
        if (!(cityName in cities)) {
            cities[cityName] = Number(cityPopulation)
        } else {
            cities[cityName] += Number(cityPopulation)
        }
    }
    // let entries = Object.entries(cities)
    // for (let pair of entries) {
    //     console.log(pair[0] + ' : ' + pair[1]);
    // }

    for (let key in cities) {
        console.log(key + ' : ' + cities[key])
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])