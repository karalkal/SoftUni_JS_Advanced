function solve(arr) {
    arr.sort((a, b) => a - b)
    arr.splice(0, arr.length / 2)
    return arr;
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))
