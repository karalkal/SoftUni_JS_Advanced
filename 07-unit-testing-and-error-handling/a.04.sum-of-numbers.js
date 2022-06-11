function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

module.exports = {sum};

// console.log(sum(['a', 2]))
// console.log(sum(1001))