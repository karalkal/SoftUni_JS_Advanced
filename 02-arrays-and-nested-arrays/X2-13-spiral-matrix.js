function solve(width, height) {
    let arr = []
    let totalNums = width * height
    let count = 0
    let nextRoundIndex = 0

    // fill rest with stars
    for (let r = 0; r < height; r++) {
        let column = []
        for (let c = 0; c < width; c++) {
            column.push('*')
        }
        arr.push(column)
    }

    while (true) {
        for (let c = 0 + nextRoundIndex; c < width; c++) {  // upper horizontal
            count += 1
            arr[nextRoundIndex][c] = count
        }
        if (count === totalNums) break

        height -= 1  // one row is already filled

        for (let r = 1 + nextRoundIndex; r < height; r++) {  //DOWN
            count += 1
            arr[r][width - 1] = count
        }
        if (count === totalNums) break


        for (let c = width - 1; c >= nextRoundIndex; c--) {  // lower vertical
            count += 1
            arr[height][c] = count
        }
        if (count === totalNums) break


        for (let r = height - 1; r > nextRoundIndex; r--) {  // UP
            count += 1
            arr[r][nextRoundIndex] = count
        }
        if (count === totalNums) break

        width -= 1
        nextRoundIndex += 1
    }

    // print array
    for (let r of arr) {
        console.log(r.join(' '));
    }
}


// solve(5, 8)
solve(5, 5)
solve(3, 3)