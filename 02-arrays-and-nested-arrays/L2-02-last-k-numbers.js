function solve(numsToReturn, numbersBack) {
    let resultArr = [1]

    for (let i = 0; i < numsToReturn - 1; i++) {
        let currentSum = 0

        for (let j = numbersBack - 1; j >= 0; j--) {
            let previousNumber = resultArr[i-j]
            if (typeof previousNumber === 'undefined') previousNumber = 0;
            currentSum += previousNumber
        }

        resultArr.push(currentSum)
    }
    console.log(resultArr);
}

solve(6, 3)         //[1, 1, 2, 4, 7, 13]
solve(8, 2)         //[1, 1, 2, 3, 5, 8, 13, 21]

