// negative number - front of the array
// positive number (or 0) - end of the array


function solve(arr) {
    let newArr = []
    for (let number of arr) {
        if (number < 0) {
            newArr.unshift(number)
        } else {
            newArr.push(number)
        }
    }
    console.log(newArr);
}

solve([7, -2, 8, 9])