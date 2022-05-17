function solve(str1, str2) {
    let n1 = Number(str1)
    let n2 = Number(str2)
    let total = 0
    for (let n = n1; n <= n2; n++) {
        total += n
    }
    console.log(total);
}


solve('1', '5')
solve('-8', '20')