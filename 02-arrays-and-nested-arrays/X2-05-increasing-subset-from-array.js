function extract(arr) {
    let newArr = []
    let largest = - Infinity

    for (let el of arr) {
        if (el >= largest) {
            newArr.push(el)
            largest = el
        }
    }
    return newArr
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]))