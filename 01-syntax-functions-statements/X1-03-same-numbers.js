function solve(number) {
    let numberAsStrArr = number.toString().split('')
    let numberAsNumberArr = numberAsStrArr.map(Number)
    let areSame = true
    let compareTo = numberAsStrArr[0]
    let sum = 0

    // console.log(numberAsStrArr, numberAsNumberArr);
    for (let str of numberAsStrArr) {
        if (str !== compareTo) {
            areSame = false;
            break;
        }
    }
    for (let num of numberAsNumberArr) {
        sum += num
    }

    console.log(areSame);
    console.log(sum);
}

solve(2222222)
solve(1234)