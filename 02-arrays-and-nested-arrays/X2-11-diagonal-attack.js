function solve(arr) {
    let numberArr = []
    let row = []
    let sumPrimaryDiagonal = 0
    let sumSecondaryDiagonal = 0


    // convert strings to arrays (rows) of numbers
    for (let r = 0; r < arr.length; r++) {
        row = (arr[r].split(' ')).map(Number)
        numberArr.push(row)
    }

    // calculate size of diagonals
    for (let i = 0; i < numberArr.length; i++) {
        sumPrimaryDiagonal += numberArr[i][i]
        sumSecondaryDiagonal += numberArr[i][numberArr.length - 1 - i]
    }

    // if equal change value of each element which is not part of the diagonal elements
    if (sumPrimaryDiagonal === sumSecondaryDiagonal) {
        for (let i = 0; i < numberArr.length; i++) {
            for (let j = 0; j < numberArr.length; j++) {
                if (j !== i &&                          // not part of primary
                    j !== numberArr.length - 1 - i)     // not part of secondary
                    numberArr[i][j] = sumPrimaryDiagonal
            }
        }
    }

    // print result either way
    for (row of numberArr) {
        console.log(row.join(' '))
    }
}


solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])

solve([
    '51 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])