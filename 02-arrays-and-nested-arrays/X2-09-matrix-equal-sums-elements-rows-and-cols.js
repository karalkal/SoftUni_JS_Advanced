function chechMatrix(arr) {
    let mustMatch = 0
    for (let i of arr[0]) mustMatch += i

    let isValid = true
    let verticalSum = 0
    let horizontalSum = 0

    // check rows
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            verticalSum += arr[j][k]
            horizontalSum += arr[k][j]
        }
        if (verticalSum !== mustMatch || horizontalSum !== mustMatch) {
            isValid = false
            break
        }else{
            verticalSum = 0
            horizontalSum = 0
        } 
    }
    console.log(isValid)
}

chechMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])