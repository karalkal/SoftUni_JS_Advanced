function solve(numsToReturn, numbersBack) {
    let resultArr = [1]

    for (let i = 0; i < numsToReturn - 1; i++) {
        let currentSum = 0

        // start from index [i - numbersBack - 1], so we can have K nums before
        // finish when we reach zero and then prev number becomes resultArr[i-0], i.e. current last number is our last K number

        for (let j = numbersBack - 1; j >= 0; j--) {
            let previousNumber = resultArr[i - j]
            if (typeof previousNumber === 'undefined') previousNumber = 0;
            currentSum += previousNumber
        }

        resultArr.push(currentSum)
    }
    return resultArr;
}

solve(6, 3)         //[1, 1, 2, 4, 7, 13]
solve(8, 2)         //[1, 1, 2, 3, 5, 8, 13, 21]

