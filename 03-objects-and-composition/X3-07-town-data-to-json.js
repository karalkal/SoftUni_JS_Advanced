function solve(arr) {
    let obj = {}
    let townsAsArr = []
    let [key0, key1, key2] = arr[0].slice(2, -2).split(' | ')   // first item in array is column headings

    for (let i = 1; i < arr.length; i++) {
        let newObj = {}
        let [town, latitude, longitude] = arr[i].slice(2, -2).split(' | ')
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)

        newObj[key0] = town
        newObj[key1] = Number(latitude)
        newObj[key2] = Number(longitude)
        townsAsArr.push(newObj)
    }
    return JSON.stringify(townsAsArr)
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))