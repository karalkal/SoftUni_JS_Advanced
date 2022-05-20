function sortNames(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b))
    let currentNum = 1
    let enumeratedArr = sortedArr.map(numerateNames)

    console.log(enumeratedArr.join('\n'));

    function numerateNames(name) {
        let string = `${currentNum}.${name}`
        currentNum += 1 
        return string
    }
}

sortNames(["John", "Bob", "Christina", "Ema"])