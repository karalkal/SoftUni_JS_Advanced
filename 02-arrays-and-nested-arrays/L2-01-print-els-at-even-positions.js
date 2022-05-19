function solve(arr) {
    let newArr = arr.filter((element, index) => index % 2 === 0)
    console.log(newArr.join(' '));
}

solve(['20', '30', '40', '50', '60'])