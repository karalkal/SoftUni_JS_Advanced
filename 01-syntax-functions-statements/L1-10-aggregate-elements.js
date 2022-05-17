function solve(arr) {
    let normalSum = 0
    let inverseSum = 0
    let concatenatedElements = ""

    for (let el of arr) {
        normalSum += Number(el);
        inverseSum += 1 / Number(el);
        concatenatedElements += el
    }
    console.log(normalSum);
    console.log(inverseSum);
    console.log(concatenatedElements);
}


solve([1, 2, 3])
solve([2, 4, 8, 16])