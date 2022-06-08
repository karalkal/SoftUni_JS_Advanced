function solve(inputArr, order) {
    if (order === 'asc') result = inputArr.sort((a, b) => a - b)
    if (order === 'desc') result = inputArr.sort((a, b) => b - a)

    return(result)
}

solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')