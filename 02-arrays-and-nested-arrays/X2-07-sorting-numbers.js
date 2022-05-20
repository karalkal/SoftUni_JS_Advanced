// sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, 
// the third is the second smallest one, the fourth is the second biggest one, and so on.

function sortNums(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    let resultArr = []
    let numbersCount = sortedArr.length

    for (let i = 0; i < numbersCount / 2; i++) {
        resultArr.push(sortedArr.shift())
        resultArr.push(sortedArr.pop())
    }
    return (resultArr.filter(a => typeof a === 'number'))
}

console.log(sortNums([1, 65, 3, 52, 48, 63, -77, 31, -3, 18, 56]));
console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));