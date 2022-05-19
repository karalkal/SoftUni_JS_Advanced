// returns the elements at odd positions from the array, doubled and in reverse order.

function solve(arr) {
    let newArr = arr.filter((element, index) => index % 2 !== 0).reverse().map(x => x * 2)

    return newArr
}

console.log(solve([10, 15, 20, 25]))
console.log(solve([3, 0, 10, 4, 7, 3]))