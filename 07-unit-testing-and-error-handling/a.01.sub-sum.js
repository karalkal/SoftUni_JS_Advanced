/*
    • If the first element is not an array, return NaN
    • If the start index is less than zero, consider its value to be a zero
    • If the end index is outside the bounds of the array, assume it points to the last index of the array 
*/

function solve(data, startFrom, finishAt) {
    let sum = 0

    if (!Array.isArray(data)) {
        return NaN
    }
    if (startFrom < 0) {
        startFrom = 0
    }
    if (finishAt >= data.length) {
        finishAt = data.length - 1
    }

    for (let i = startFrom; i <= finishAt; ++i) {
        sum += Number(data[i])
    }
    return sum
}


console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))
console.log(solve([10, 'twenty', 30, 40], 0, 2))
console.log(solve([], 1, 2))
console.log(solve('text', 0, 2))
console.log(solve(['10', '20', '30', '40'], -300, 300))
console.log(solve([true, false], -300, 300))